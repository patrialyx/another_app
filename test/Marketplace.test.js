// this test ensures that the marketplace address is not null etc

// import
const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Marketplace', ([deployer, seller, buyer]) => {
    let marketplace 
    
    //async await pattern
    before(async () => {
        // deploy(blockchain stuff) is async function call (means we can do other things while deploy is running)
        // but over here we wait until deployed before running other code by using await
        // await must use with async
        marketplace = await Marketplace.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfully', async () => {
            const address = await marketplace.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async() => {
            const name = await marketplace.name()
            assert.equal(name, 'Traceable Marketplace')
        })
    })
    describe('products', async() => {
        let result, productCount

        before(async () => {
            // from is how they know that the seller is the one who is calling the code
            result = await marketplace.createProduct('Donation 1', web3.utils.toWei('1', 'Ether'), { from: seller})
            productCount = await marketplace.productCount();
        })

        // product count changes whenever we add 1
        it('creates products', async() => {

            // SUCESSES
            assert.equal(productCount, 1)
            // log out the event eery time its called
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
            assert.equal(event.name, 'Donation 1', 'name is correct')
            assert.equal(event.price, web3.utils.toWei('1', 'Ether'), 'price is correct')
            assert.equal(event.description, 'Donation to X', 'description is correct')
            assert.equal(event.owner, seller, 'owner is correct')
            assert.equal(event.purchased, false, 'purchase is correct')


            // FAILURE: product must have name
            await await marketplace.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller}).should.be.rejected;
            // FAILURE: product must have price
            await await marketplace.createProduct('Donation 1', 0, { from: seller}).should.be.rejected;
            
        })
        it('lists products', async() => {
            const product = await marketplace.products(productCount)
            assert.equal(product.id.toNumber(), productCount.toNumber(), 'id is correct')
            assert.equal(product.name, 'Donation 1', 'name is correct')
            assert.equal(product.price, web3.utils.toWei('1', 'Ether'), 'price is correct')
            assert.equal(product.description, 'Donation to X', 'description is correct')
            assert.equal(product.owner, seller, 'owner is correct')
            assert.equal(product.purchased, false, 'purchase is correct')
        })

        it('sells products', async() => {
            // track seller balance before purchase
            let oldSellerBalance
            oldSellerBalance = await web3.eth.getBalance(seller)
            oldSellerBalance = new web3.utils.BN(oldSellerBalance)
            // bc we want to use Big Number addition
            // SUCCESS: Buyer makes purhcase
            result = await marketplace.purchaseProduct(productCount, {from: buyer, value: web3.utils.toWei('1', 'Ether')})
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
            assert.equal(event.name, 'Donation 1', 'name is correct')
            assert.equal(event.price, web3.utils.toWei('1', 'Ether'), 'price is correct')
            assert.equal(event.description, 'Donation to X', 'description is correct')
            assert.equal(event.owner, buyer, 'owner is correct')
            assert.equal(event.purchased, true, 'purchase is correct')
            
            // check that seller received funds
            // after - before = funds
            let newSellerBalance 
            newSellerBalance = await web3.eth.getBalance(seller)
            newSellerBalance = new web3.utils.BN(newSellerBalance)

            let price
            price = web3.utils.toWei('1', 'Ether')
            price = new web3.utils.BN(price)

            const expectedBalance = oldSellerBalance.add(price)
            assert.equal(newSellerBalance.toString(), expectedBalance.toString())

            //FAILURE: tries to buy product that does not exist (does not have valid id)
            await marketplace.purchaseProduct(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
            // FAILURE: not enough ether
            await marketplace.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('0.5', 'Ether')}).should.be.rejected;
            // FAILURE deployer tries to buy the product (shouldnt be purchased twice)
            await marketplace.purchaseProduct(productCount, { from: deployer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
            // FAILURE buyer tries to buy the product (shouldnt be purchased twice)
            await marketplace.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
            
            


        })


    })
})