
import './App.css';

import React, { Component, useState} from 'react';
import Web3 from 'web3'
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar_org'
import {Link, useHistory} from "react-router-dom"
import DonorLogic from './DonorLogic'
import DonorPage from './DonorPage'

class Org extends Component {
    
  

    async componentWillMount() {
      await this.loadWeb3()
      await this.loadBlockchainData()
    }
  
    async loadWeb3(){
      if (window.ethereum){
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      }
      else if (window.web3){
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else{
        window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!")
      }
    }
  
    async loadBlockchainData(){
      const web3 = window.web3
      //load account
      const accounts = await web3.eth.getAccounts()
      this.setState({account: accounts[0]})
      //load the smart contract, impt 2 things: abi and address to retrieve
      // dynamically detect network id
      const networkId = await web3.eth.net.getId()
      const networkData = Marketplace.networks[networkId]
      if (networkData){
        const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
        this.setState({ marketplace })
        const productCount = await marketplace.methods.productCount().call()
        this.setState({productCount})
        console.log("product count:"+productCount.toString())
        for (var i=1; i <= productCount; i++) {
          const product = await marketplace.methods.products(i).call()
          console.log("product name:"+product.name)
          this.setState({
            products: [...this.state.products, product]
          })
        }
        this.setState({ loading: false})
      }
      else{
        window.alert("Marketplace contract not deployed to detected network.")
      }
    }
  
    constructor(props){
      super(props)
      this.state = {
        account: '',
        productCount: 0,
        products: [],
        loading: true
      }

      this.createProduct = this.createProduct.bind(this)
    }

    createProduct(name, price){
      this.setState({loading: true})
      this.state.marketplace.methods.createProduct(name, price).send({from: this.state.account})
      .once('receipt', (receipt) =>{
        this.setState({loading: false})
      })
    }
  
    

    render() {
      
      return (
        <div>
          <Navbar account={this.state.account}/>
        <DonorLogic
          products={this.state.products}
          createProduct={this.createProduct}
        />
        
      </div>
    );
  }
    
    
}

export default Org;