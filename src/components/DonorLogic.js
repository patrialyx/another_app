import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import BaldCypress from "../bald-cypress.jpg"
import LiveOak from "../live-oak.jpg"
import HollyEastPalatka from "../hollyeastpalatka.jpg"
import SouthernMagnolia from "../southern-magnolia.jpeg"
import TulipTree from "../tulip-tree.jpeg"
import SlashPineTree from "../slash-pine-tree.jpg"
import './DonorLogic.css';
import Org from "./Org"
import OrgLogic from "./OrgLogic"


class DonorLogic extends Component {

  
  
  render() {
    return (
      <div>
        <h2>Buy Product</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Buy
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      // <div>
      //   <div class="flexbox-container" id="content">
      //   <div class="col mt-0">
      //   {this.props.products.map((product, key) => {
      //     return (
      //     <Card style={{ width: '24rem' }} key={key}>
      //       <Card.Img variant="top" src={BaldCypress} />
      //       <Card.Body>
      //         <Card.Title>{product.name}</Card.Title>
      //         <Card.Text>
      //           Some quick example text to build on the card title and make up the bulk of
      //           the card's content.
      //           <p>&nbsp;</p>
      //           {product.price.toString()}
      //         </Card.Text>
      //         <a href="http://localhost:3000/buy" class="btn btn-primary" role="button">
      //             Plant
      //         </a>
      //       </Card.Body>
      //     </Card>
      //     )
      //     }
      //   )
      //   }
      //   </div>
      //   <div class="col mt-0">
      //     <Card style={{ width: '24rem' }}>
      //       <Card.Img variant="top" src={LiveOak} />
      //       <Card.Body>
      //         <Card.Title>Live Oak</Card.Title>
      //         <Card.Text>
      //           Some quick example text to build on the card title and make up the bulk of
      //           the card's content.
      //         </Card.Text>
      //         <a href="http://localhost:3000/buy" class="btn btn-primary" role="button">
      //             Plant
      //         </a>
      //       </Card.Body>
      //     </Card>
      //   </div>
      //   <div class="col mt-0">
      //     <Card style={{ width: '24rem' }}>
      //       <Card.Img variant="top" src={HollyEastPalatka} />
      //       <Card.Body>
      //         <Card.Title>Holly East Palatka</Card.Title>
      //         <Card.Text>
      //           Some quick example text to build on the card title and make up the bulk of
      //           the card's content.
      //         </Card.Text>
      //         <a href="http://localhost:3000/buy" class="btn btn-primary" role="button">
      //             Plant
      //         </a>
      //       </Card.Body>
      //     </Card>
      //   </div>
      // </div>
      
      // <div class="flexbox-container" id="content">
      //   <div class="col mt-0">
      //     <Card style={{ width: '24rem' }}>
      //       <Card.Img variant="top" src={SouthernMagnolia} />
      //       <Card.Body>
      //         <Card.Title>Southern Magnolia</Card.Title>
      //         <Card.Text>
      //           Some quick example text to build on the card title and make up the bulk of
      //           the card's content.
      //         </Card.Text>
      //         <a href="http://localhost:3000/buy" class="btn btn-primary" role="button">
      //             Plant
      //         </a>
      //       </Card.Body>
      //     </Card>
      //   </div>
      //   <div class="col mt-0">
      //     <Card style={{ width: '24rem' }}>
      //       <Card.Img variant="top" src={TulipTree} />
      //       <Card.Body>
      //         <Card.Title>Yellow Tulip Tree</Card.Title>
      //         <Card.Text>
      //           Some quick example text to build on the card title and make up the bulk of
      //           the card's content.
      //         </Card.Text>
      //         <a href="http://localhost:3000/buy" class="btn btn-primary" role="button">
      //             Plant
      //         </a>
      //       </Card.Body>
      //     </Card>
      //   </div>
      //   <div class="col mt-0">
      //     <Card style={{ width: '24rem' }}>
      //       <Card.Img variant="top" src={SlashPineTree} />
      //       <Card.Body>
      //         <Card.Title>Slash Pine Tree</Card.Title>
      //         <Card.Text>
      //           Some quick example text to build on the card title and make up the bulk of
      //           the card's content.
      //         </Card.Text>
      //         <a href="http://localhost:3000/buy" class="btn btn-primary" role="button">
      //             Plant
      //         </a>
      //       </Card.Body>
      //     </Card>
      //   </div>
      // </div>
      // </div>
    )
  }
}

export default DonorLogic;