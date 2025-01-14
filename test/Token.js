const { expect } = require("chai");
const { ethers } = require ("hardhat");
const { describe } = require("mocha");
const { loadFixture } =require("@nomicfoundation/hardhat-network-helpers")



    async function deployloadFixture(){
        const Token = await ethers.getContractFactory("Token");
        const [ owner, Alan, Bob ] = await ethers.getSigners();
        console.log("Deploying Token contract...");
        const hardhatToken = await Token.deploy();
        // console.log("Deployed token contract:", hardhatToken);
        await token.waitForDeployment();
        console.log("Token deployed at:", hardhatToken.address);
        return  {hardhatToken,Token,owner, Alan, Bob};
    }
    describe("Token Contract", function(){
    describe("Deployment",function(){
         
        it("owner balance is equal total supply", async function(){
          const { hardhatToken, owner } = await loadFixture(deployloadFixture);
          const ownerBalance = await hardhatToken.balanceOf(owner.address);
          expect (await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })

    it("owner balance is assigned with first address", async function(){
        const { hardhatToken, owner } = await loadFixture(deployloadFixture);
        expect (await hardhatToken.owner()).to.equal(owner.address);
    })
    })    


describe("Transactions", function(){
    it("transacrions between the acccounts",  async function(){
         const { hardhatToken, owner, Alan, Bob }= await loadFixture(deployloadFixture);
         await expect (hardhatToken.transfer(Alan.address, 50)).to.changeTokenBalances(hardhatToken, [owner, Alan], [-50,50]);
         await expect( hardhatToken.connect(Alan).transfer( Bob.address,50)).to.changeTokenBalances( hardhatToken, [Alan, Bob], [-50, 50]);

    })

    it("emit fuction", async function(){
        const { hardhatToken, owner, Alan, Bob }= await loadFixture(deployloadFixture);
        await expect(hardhatToken.transfer(Alan.address,50))
        .to.emit(hardhatToken,"Transfer")
        .withArgs(owner.address, Alan.address, 50);

        await expect(hardhatToken.connect(Alan).transfer(Bob.address,50))
        .to.emit(hardhatToken, "Transfer")
        .withArgs(Alan.address, Bob.address, 50);
    })

    it("Fail to send beacause of not enough Tokens", async function(){
        const { hardhatToken, owner, Alan, Bob }= await loadFixture(deployloadFixture);

        const initialBalance = await hardhatToken.balanceOf(owner.address);
        await expect (hardhatToken.connect (Alan).transfer(owner.address, 1)).to.be.revertedWith("Not sufficient Balance");
        expect (await hardhatToken.balanceOf(owner.address)).to.equal(initialBalance);

    })
})


})