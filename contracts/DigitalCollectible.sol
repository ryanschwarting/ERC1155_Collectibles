// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import {AccessControlEnumerable} from "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "./default_operator_contracts/DefaultOperatorFilterer.sol";

/// @title Digital Collectible
/// @author Ryan Schwarting
contract DigitalCollectible is
    AccessControlEnumerable,
    ERC1155Burnable,
    ERC1155Supply,
    DefaultOperatorFilterer
{
    struct TokenData {
        uint256 maxSupply;
        uint256 price;
    }

    enum ContractState {
        OFF,
        PRESALE,
        PUBLIC_SALE
    }

    ContractState contractState;

    bytes32 public constant CONTRACT_MANAGER = keccak256("CONTRACT_MANAGER");

    mapping(uint256 tokenId => TokenData) public tokenData;

    event Withdraw(uint256 _amount);
    event TokensUpdated(uint256[] _tokenIds);

    constructor(string memory _URI) ERC1155(_URI) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(CONTRACT_MANAGER, msg.sender);
    }

    /// @param _ids array of token ID's wanting to purchase
    /// @param _amounts array of quantities for each token ID to purchase
    function publicSale(
        uint256[] calldata _ids,
        uint256[] calldata _amounts
    ) external payable {
        require(
            contractState == ContractState.PUBLIC_SALE,
            "publicSale: public sale is not live"
        );

        uint256 i = 0;
        uint256 totalCost = 0;
        uint256 idLength = _ids.length;
        for (; i < idLength; ) {
            require(
                totalSupply(_ids[i]) + _amounts[i] <=
                    tokenData[_ids[i]].maxSupply,
                "publicSale: not enough supply left"
            );
            totalCost += tokenData[_ids[i]].price * _amounts[i];

            unchecked {
                ++i;
            }
        }

        require(msg.value >= totalCost, "publicSale: SEND MORE ETHEREUM");

        _mintBatch(msg.sender, _ids, _amounts, "");
    }

    /// @param _ids array of token ID's wanting to purchase
    /// @param _amounts array of quantities for each token ID to purchase
    function presale(
        uint256[] calldata _ids,
        uint256[] calldata _amounts
    ) external payable {
        require(
            contractState == ContractState.PRESALE,
            "presale: presale is not live"
        );

        require(
            _ids.length == _amounts.length,
            "presale: lengths do not match"
        );

        uint256 i = 0;
        uint256 totalCost = 0;
        for (; i < _ids.length; ) {
            require(
                totalSupply(_ids[i]) + _amounts[i] <=
                    tokenData[_ids[i]].maxSupply,
                "presale: not enough supply left"
            );
            totalCost += tokenData[_ids[i]].price * _amounts[i];

            unchecked {
                ++i;
            }
        }

        require(msg.value >= totalCost, "presale: SEND MORE ETHEREUM");

        _mintBatch(msg.sender, _ids, _amounts, "");
    }

    /// @param _state is the status of the contract
    function setContractState(
        ContractState _state
    ) external onlyRole(CONTRACT_MANAGER) {
        contractState = _state;
    }

    /// @notice withdraw tokens here
    /// @param _destination is the address the CONTRACT_MANAGER sends ethereum balance
    function withdraw(
        address payable _destination
    ) external onlyRole(CONTRACT_MANAGER) {
        uint256 balance = address(this).balance;
        require(_destination.send(balance));
        emit Withdraw(balance);
    }

    /// @param _baseURI is a string that sets the metadata
    function setURI(
        string memory _baseURI
    ) external onlyRole(CONTRACT_MANAGER) {
        _setURI(_baseURI);
    }

    /// @param _tokenData is the supply and price data of the token
    /// @param _tokenIds is the array of token ID's
    /// should we add restrictions on price change for clarity for buyers but limits abiltity to move price up and down
    function setTokenData(
        TokenData[] memory _tokenData,
        uint256[] memory _tokenIds
    ) external onlyRole(CONTRACT_MANAGER) {
        require(
            _tokenIds.length == _tokenData.length,
            "setTokenData: Mismatched in length"
        );
        uint256 i = 0;
        for (; i < _tokenData.length; ) {
            require(
                _tokenData[i].maxSupply >= totalSupply(_tokenIds[i]),
                "setTokenData: maxSupply must greater than or equal to total supply"
            );
            tokenData[_tokenIds[i]] = _tokenData[i];

            unchecked {
                ++i;
            }
            emit TokensUpdated(_tokenIds);
        }
    }

    /// @param _ids is an array of token IDs to get the supply left from each token ID
    function getSupply(
        uint256[] calldata _ids
    ) external view returns (uint256[] memory supplies) {
        uint256 length = _ids.length;
        supplies = new uint256[](length);
        uint256 i;
        for (; i < length; ) {
            supplies[i] = totalSupply(_ids[i]);
            unchecked {
                ++i;
            }
        }
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public override onlyAllowedOperator(from) {
        super.safeBatchTransferFrom(from, to, ids, amounts, data);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        uint256 amount,
        bytes memory data
    ) public override onlyAllowedOperator(from) {
        super.safeTransferFrom(from, to, tokenId, amount, data);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(ERC1155, AccessControlEnumerable)
        returns (bool)
    {
        return (ERC1155.supportsInterface(interfaceId) ||
            AccessControlEnumerable.supportsInterface(interfaceId));
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override(ERC1155, ERC1155Supply) {
        ERC1155Supply._beforeTokenTransfer(
            operator,
            from,
            to,
            ids,
            amounts,
            data
        );
    }
}
