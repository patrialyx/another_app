import React, { Component } from 'react';
import Navbar from './Navbar_donor'

import Card from "react-bootstrap/Card";
import LiveOak from "../live-oak.jpg"
import './DonorLogic.css';

import Web3 from 'web3'
import Marketplace from '../abis/Marketplace.json'

import {Link, useHistory} from "react-router-dom"




class DonorLogic extends Component {
  
    render() {
      return (
      <div>
        <div class="flexbox-container" id="content">
        <div class="row mt-5 mb-5 ml-5 mr-10">
        {this.props.products.map((product, key) => {
          return (
          <Card style={{ width: '20rem' }} key={key}>
            <Card.Img variant="top" src={LiveOak} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
              A large, deciduous tree growing up to 20–40m tall. Also known as common oak, this species grows and matures to form a broad and spreading crown with sturdy branches beneath.
                <p>&nbsp;</p>
                Donate: {window.web3.utils.fromWei(product.price.toString(), 'Ether')} dollar
                <p>&nbsp;</p>
                Owner: {product.owner}
              </Card.Text>
              <button 
              name={product.id}
              value={product.price}
                onClick={(event)=>{
                  console.log("clicked..")
                  this.props.purchaseProduct(event.target.name, event.target.value)
                }}
              >
                Plant
              </button>
            </Card.Body>
          </Card>
          )
          }
        )
        }
        </div>
        )
         
       </div>
       </div>
     )
     
   }
 }

export default DonorLogic;