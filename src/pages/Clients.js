import React from 'react'
import '../styles/clients.css';
import Client from '../components/Client';

const Clients = ({ color }) => {
    const underlineStyle = {
        backgroundColor: color,
    }
    return (
        <div className='clients'>
            <div className="top">
                <h1>Client Remarks</h1>
                <div
                    style={underlineStyle}
                    className="underline"></div>
            </div>
            <div className="bottom-part">
                <Client name="Mr. John Nyedia" title="Principal, Kenyenya TTC" cell="0721713201" remarks="Thanks to your expertise, our online presence has never looked better. The website is not only visually appealing but also easy to navigate. We've already received positive feedback from our vistors." color="red" />
                <Client name="Mr. Robinson Kambi" title="Principal, Orogare TVC" cell="0725826529" remarks="Your ability to capture the essence of our college and translate it into a user-friendly website is remarkable. It has provided cost savings by allowing bidders to conveniently download tenders from their own devices. We're excited to see how this will help us grow our online presence." color="red" />
            
            </div>
            {/* <p>1</p> */}
            {/* <p>2</p> */}
{/* <p>carousel navigation buttons</p> */}
        </div>
    )
}

export default Clients