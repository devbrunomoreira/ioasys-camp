import React from 'react'
import './styles/wallet.css'
import WalletIcon from '../imgs/walleticon.png'


export default class Wallet extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="wallet-div">
                <img src = {WalletIcon} height= {20} width= {20}/>
                <p>R${this.props.valueWallet}</p>
            </div>
        )
    }

}