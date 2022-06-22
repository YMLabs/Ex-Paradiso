import React from 'react'
import "./Home.css"

function Home() {
  return (
    <section className='home content'>
        <div>
            <h3>MINT INFO</h3>
            <div>
            <p>7777 NFT collection</p>
            <p>Minting june 2022</p>
            <p>on erc-721</p>
            </div>
            <p>Public Mint TBA</p>
        </div>
        
        <div className='btn-right'>
            <button>Connect Wallet</button>
            <div className='btn-group'>
            <button> IG</button>
            <button> | TW |</button>
            <button>DISC </button>

            </div>
        </div>
    </section>
  )
}

export default Home