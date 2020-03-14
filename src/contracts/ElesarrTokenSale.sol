pragma solidity ^0.5.1;
import "./Elesarr.sol";





contract ElesarrTokenSale{
    address public admin;
    Elesarr public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokenSold;
    // using SafeMath for uint256;

    event Sell(address _buyer, uint256 _amount, uint256 _value);
    constructor(Elesarr _tokenContract, uint256 _tokenPrice) public{
        // assign an admin
        // Token Contract
        // Token Price
        admin=msg.sender;
        tokenContract=_tokenContract;
        tokenPrice = _tokenPrice;
    }
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    function buyToken(uint256 _numberOfTokens) public payable{
        // Require that value is equla to tokens
        // require that contract has enough tokens
        // require that ta transfer is sucessful
        // keep track of tokenSold
        // trigger Sell event
        // trigger
        require(msg.value == mul(_numberOfTokens, tokenPrice));
        // makes sure the contract has enough tokens
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);
        require(tokenContract.transfer(msg.sender, _numberOfTokens));
        tokenSold += _numberOfTokens;
        emit Sell(msg.sender, _numberOfTokens, msg.value);
    }

    function endTokenSale()public {
        // require admin
        // transfer remaining dapp tokens to admin 
        // destroy the contract 
        require(msg.sender == admin);  
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this)))); 
        seffdestruct(admin);
    }
}