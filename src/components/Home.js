import React, {Container, Component } from 'react';
import Navbar from './Navbar'

import Web3 from 'web3'
import Marketplace from '../abis/Marketplace.json'

class Home extends Component {
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
            this.setState({loading: false})
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
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar account={this.state.account}/>
                </div>
                <div className="orientation">
                    <ul>
                        <a href="http://localhost:3000/signup" class="btn btn-info" role="button">
                            I want to plant a tree
                        </a>
                    </ul>
                    <ul>
                        <a href="http://localhost:3000/org" class="btn btn-info" role="button">
                            I want to list a project
                        </a>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Home;