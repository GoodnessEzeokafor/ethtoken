require('chai')
    .use(require('chai-as-promised'))
    .should()

const ElesarrTokenSale = artifacts.require("./ElesarrTokenSale.sol")
const ElesarrToken = artifacts.require("./Elesarr.sol")

contract("ElesarrTokenSale Contract", ([dep, user, user2, user3, user4]) => {
    before(async() => {
        this.contract = await ElesarrTokenSale.deployed()
        this.tokenContract = await ElesarrToken.deployed()
        this.tokenPrice = 1000000000000000;
    })

    describe('TESTING PHASE 1', async() => {
        it("CHECKS iF IT DEPLOYED SUCCESSFULLY", async() => {
            const address = this.contract.address
            assert.notEqual(address, null)
            assert.notEqual(address, 0x0)
            assert.notEqual(address, undefined)
            assert.notEqual(address, "")
        })
        it("CHECKS THE PUBLIC ADMIN STATE IS FUNCTIOANL", async() => {
            const admin = await this.contract.admin()
            assert.equal(admin, dep)
        })
        it("CHECK TOKEN PRICE", async() => {
            const tokenPrice = await this.contract.tokenPrice()
            assert.equal(tokenPrice.toString(), this.tokenPrice)
        })
    })

    describe('TESTING PHASE 2', async() => {
      it("TESTING THE BUY FUNCTIONALITY", async() => {
        const numberOfToken = 30;  
        const value = numberOfToken * 1000000000000000
        const buyToken = await this.contract.buyToken(numberOfToken, {from:user, value:value});

        // const result = buyToken.event
        // const tokenSold = await this.contract.to
        // const event = buyToken.logs[0].args
        // assert.equal(event['_numberOfTokens'], numberOfToken)
        // await this.contract.buyToken(numberOfToken, {from:user, value:400000000000}).should.be.rejected;

        // const balanceOfUser = await this.tokenContract.balanceOf(user)
        // assert.equal(balanceOf.toString(), 30)
    })
    })
    
    
})