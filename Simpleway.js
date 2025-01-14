const { expect } = require("chai");
const { ethers } = require ("hardhat");
const { describe } = require("mocha");
const { loadFixture } =require("@nomicfoundation/hardhat-network-helpers")

describe("Token Contract", function(){

    async function deployloadFixture(){
        const Token = await ethers.getContractFactory("Token");
        const [ owner, Alan, Bob ] = await ethers.getSigners();
        console.log("Deploying Token contract...");
       
        const hardhatToken = await Token.deploy();
         console.log("Deployed token contract:", hardhatToken);
        console.log("Token deployed at:", hardhatToken.address);
        return  {hardhatToken,Token,owner, Alan, Bob};

    }

    it("Assigning the owner with total supply", async function(){
        const { hardhatToken, owner } = await loadFixture(deployloadFixture);
      
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect( await hardhatToken.totalSupply()).to.equal(ownerBalance);
            })
    
    it("transfer token form owner to first address", async function(){
        const { hardhatToken, owner, Alan, Bob } = await loadFixture(deployloadFixture);

        // await hardhatToken.transfer(Alan.address, 50);
        // expect(await hardhatToken.balanceOf(Alan.address)).to.equal(50);
        // await hardhatToken.connect(Alan).transfer(Bob.address, 50);
        // expect(await hardhatToken.balanceOf(Bob.address)).to.equal(50);
        await expect (hardhatToken.transfer(Alan.address,50)).to.changeTokenBalances(hardhatToken,[ owner, Alan], [-50,50]);
        await expect (hardhatToken.connect(Alan).transfer(Bob.address,50)).to.changeTokenBalances (hardhatToken, [Alan,Bob], [-50,50]);
    })
    })
