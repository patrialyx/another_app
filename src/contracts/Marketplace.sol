pragma solidity ^0.5.0;
// backend
contract Marketplace {
    // give smart contract a name
    string public name;
    // mapping- key (productid) value (product struct) 
    // name of mapping is products
    // we dk how big mapping is (evm limitation)
    uint public productCount = 0; // count how many products

    // state variable, when we add products, they are put on the blockchain
    // read, read from blockchain
    mapping(uint => Product) public products; 

    // TODO: might add more attributes to this struct later on
    struct Product {
        uint id; // number is alw positive
        string name;
        uint price;
        address payable owner;// person who owns the product at first (seller)
        bool purchased;
    }
    // check the logs by triggering events
    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );
    // check the logs by triggering events
    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );


    // runs when smart contract is deployed
    constructor() public{
        name = "Traceable Marketplace";
    }

    function createProduct(string memory _name, uint _price) public {
        // require valid name
        require(bytes(_name).length > 0 );
        // require a valid price
        require(_price > 0);
        // make sure parameters are correct
        productCount++;
        // create product
        // sender = person who called the function, msg is a global variable in solidity
        // eth add
        products[productCount] = Product(productCount, _name, _price, msg.sender, false);
        // trigger event
        emit ProductCreated(productCount, _name, _price, msg.sender, false);
    }

    // ether wont allow function to send payment unless there is payable modifier
    function purchaseProduct(uint _id) public payable{
        // fetch the product
        //local product variable in memory, fetch product from product mapping and create new product copy in memoy
        Product memory _product = products[_id];
        // fetch the owner
        address payable _seller = _product.owner;
        // make sure that the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // check there is enough ether in the transaction
        require(msg.value >= _product.price);
        // require that the product has not been purchased alr
        require(!_product.purchased);
        // require that the buyer is not the seller
        require(_seller != msg.sender);
        // make sure the product is valid (can be purchased)
        // purchase the product: transfer ownership to buyer
        _product.owner = msg.sender; //buyer
        // mark as purchased
        _product.purchased = true;
        products[_id] = _product; //put back in product mapping
        // pay the seller by sending them ether
        address(_seller).transfer(msg.value); 

        // trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);

    }
}