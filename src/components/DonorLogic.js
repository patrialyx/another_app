import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BaldCypress from "../bald-cypress.jpg"
import LiveOak from "../live-oak.jpg"
import HollyEastPalatka from "../hollyeastpalatka.jpg"
import SouthernMagnolia from "../southern-magnolia.jpeg"
import TulipTree from "../tulip-tree.jpeg"
import SlashPineTree from "../slash-pine-tree.jpg"
import './DonorLogic.css';

class DonorLogic extends Component {

  

  render() {
    return (
      <div>
      <div class="flexbox-container" id="content">
        <div class="col mt-0">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={BaldCypress} />
            <Card.Body>
              <Card.Title>Bald Cypress Tree</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Plant</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col mt-0">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={LiveOak} />
            <Card.Body>
              <Card.Title>Live Oak</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Plant</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col mt-0">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={HollyEastPalatka} />
            <Card.Body>
              <Card.Title>Holly East Palatka</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" onClick="{page}">Plant</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div class="flexbox-container" id="content">
        <div class="col mt-0">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={SouthernMagnolia} />
            <Card.Body>
              <Card.Title>Southern Magnolia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Plant</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col mt-0">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={TulipTree} />
            <Card.Body>
              <Card.Title>Yellow Tulip Tree</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Plant</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col mt-0">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={SlashPineTree} />
            <Card.Body>
              <Card.Title>Slash Pine Tree</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Plant</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
    )
  }
}

export default DonorLogic;