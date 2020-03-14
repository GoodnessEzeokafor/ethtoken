require('chai')
    .use(require('chai-as-promised'))
    .should()

const Elesarr = artifacts.require("./Elesarr.sol")

contract("ELESARR CONTRACT TOKEN", ([dep, user, user2, user3]) => {
    before(async() => {
        this.contract = await Elesarr.deployed()
    })

    describe('ELESARRTOKEN TEST SUITE 1', () => {
        it("CHECKS IF DEPLOYED SUCCESSFULLY",async() => {
            const address = this.contract.address
            assert.notEqual(address, null)
            assert.notEqual(address, 0x0)
            assert.notEqual(address, undefined)
            assert.notEqual(address, "")
        })
        it("CHECKS IF TOTALSUPPLY IS 1000000", async() => {
            const totalSupply = await this.contract.totalSupply()
            assert.equal(totalSupply.toString(), 2000000)
        })
        it("CHECKS DEPLOYER TOKEN BALANCE", async() => {
            const balanceOfOwner = await this.contract.balanceOf(dep)
            assert.equal(balanceOfOwner.toString(), 2000000)
        })
        it("CHECKS THE TOKEN NAME", async() => {
            const name= await this.contract.name()
            assert.equal(name, "GoodyToken")
        })
        it("CHECKS THE SYMBOL NAME", async() =>{
            const symbol = await this.contract.symbol()
            assert.equal(symbol, "GT")
        })
        it("CHECKS THE TOKEN STANDARD", async() => {
            const standard = await this.contract.standard()
            assert.equal(standard, "Goody Token v1.0")
        })
    });
    describe('CHECKS IF THE TRANSFER FUNTIONALITY IS WORKING', async() => {
        it("CHECK THE TRANSFER FUNCTIONALITY", async() => {
            await this.contract.transfer(user, 3000000, {from:dep}).should.be.rejected
            await this.contract.transfer(user, 1000000, {from:dep})

            const balanceOfUser = await this.contract.balanceOf(user)
            const balanceOfDep = await this.contract.balanceOf(dep)
            assert.equal(balanceOfUser.toString(),1000000)
            assert.equal(balanceOfDep.toString(),1000000)
        })
        // it("approves for delegated transfer", async() => {
        //     await this.contract.approve(user3, 100, {from:dep})
        // })
        // it("handles delegated transfer", async() => {
        //     var fromAccount = user2;
        //     var toAccount = user3;
        //     spendingAccount = user4;

        //     await this.contract.transferFrom()
        // })
    })
    
})