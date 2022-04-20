import React, { Component } from 'react';

class BuyLogic extends Component {



  render() {
    return (
      <div id="content">
        <h1>$5 is all you need to plant a tree</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          // console.log(typeof name)
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          // console.log(typeof price)
          this.props.createProduct(name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="TreeName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Give your trees a cluster name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="TreePrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Tree Price"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Plant</button>
        </form>
       
      </div>
    );
  }
}

export default BuyLogic;