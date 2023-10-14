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
                <Client name="Mr. John Enoq Lawrence" title="Principal KenyenyaTTC" cell="0719702831" remarks="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure." color="red" />
                <Client name="Mr. John Enoq Lawrence" title="Principal KenyenyaTTC" cell="0719702831" remarks="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure." color="red" />
            
            </div>
            <p>1</p>
            <p>2</p>

        </div>
    )
}

export default Clients