import React from 'react'
import '../styles/contacts.css';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import Button from '../components/Button';

const Contacts = ({ color }) => {
    const underlineStyle = {
        backgroundColor: color,
    }
    return (
        <div className='contacts'>
            <div className="top">
                <h1>Talk to Me</h1>
                <div
                    style={underlineStyle}
                    className="underline"></div>
            </div>
            <div className="bottom-part">
                <div className="left">
                    <h2>My Place</h2>
                    <div className="top-s">
                        <p>4th Floor,B38</p>
                        <p>Ago Gracious Apartments</p>
                        <p>Juja</p>
                    </div>
                    <div className="b-s">
                        <div className="cont">
                            <CallIcon style={{ fontSize: '1.7em', color: color }}/>
                            <p>0701010101</p>
                        </div>
                        <div className="cont">
                            <WhatsAppIcon style={{ fontSize: '1.7em', color: color }}/>
                            <p>0701010101</p>
                        </div>
                        <div className="cont">
                            <MailIcon style={{ fontSize: '1.7em', color: color }}/>
                            <p>tsungulawrence@gmail.com</p>
                        </div>
                    </div>
                    <div className="f-s">

                    </div>
                </div>
                <div className="right">
                {/* <h2>Send Me a Note</h2> */}
                    <div className="t-s">
                   
                        <input type="text" placeholder='Enter Name' />
                        <input type="email" placeholder='Enter Email' />
                    </div>
                    <div className="b-ss">
                        <textarea 
                        placeholder='Enter Your Message...'
                        name=""></textarea>
                    </div>
                    <Button content="Send" bgcolor={color}/>

                </div>
            </div>
        </div>
    )
}

export default Contacts