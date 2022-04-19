import React, { Component } from 'react';

class OrgLogic extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Project</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.createProduct(name, price)
          const name = this.productName.value
          const price = this.productPrice.value
          this.props.createProduct(name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Project Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </form>
       
      </div>
    );
  }
}

export default OrgLogic;