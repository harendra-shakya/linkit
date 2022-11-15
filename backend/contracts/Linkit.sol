// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Linkit {
    mapping(string => AggregatorV3Interface) private s_priceFeeds;

    constructor(
        string[] memory tokens,
        address[] memory priceFeeds
    ) {
        for (uint256 i = 0; i < tokens.length; i++) {
            s_priceFeeds[tokens[i]] = AggregatorV3Interface(priceFeeds[i]);
        }
    }

    function getLatestPrice(string memory token) public view returns (uint256, uint256) {
        (, int256 price, , , ) = s_priceFeeds[token].latestRoundData();
        uint256 decimals = uint256(s_priceFeeds[token].decimals());
        return (uint256(price), decimals);
    }
}