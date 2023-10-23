import React, { useRef, useState } from 'react'
import '../styles/contacts.css';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

const Contacts = ({ color }) => {
    const [sentStatus, setSentStatus] = useState(false);
    const underlineStyle = {
        backgroundColor: color,
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2gd73or', 'template_824wu7f', form.current, '-8ZfrslCkIVcHkhaM')
            .then((result) => {
                console.log(result.text);
                toast.success('Email sent successfully');
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send email');
            });
        setSentStatus(!sentStatus);
        e.target.reset();
        // window.location.reload();
    };
    console.log(sentStatus)
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
                            <CallIcon style={{ fontSize: '1.7em', color: color }} />
                            <p>0719702831</p>
                        </div>
                        <div className="cont">
                            <WhatsAppIcon style={{ fontSize: '1.7em', color: color }} />
                            <p>0719702831, 0745652607</p>
                        </div>
                        <div className="cont">
                            <MailIcon style={{ fontSize: '1.7em', color: color }} />
                            <p>tsungulawrence@gmail.com</p>
                        </div>
                    </div>
                    <div className="f-s">

                    </div>
                </div>
                <div className="right">

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="t-s">

                            <input type="text" name='name' placeholder='Enter Name' />
                            <input type="email" name="email" placeholder='Enter Email' />
                        </div>
                        <div className="b-ss">
                            <textarea
                                placeholder='Enter Your Message...'
                                name="message"></textarea>
                        </div>
                        <Button type='submit ' content="Send" bgcolor={color} />
                    </form>

                </div>
            </div>
            <Toaster 
            richColors position="top-center" />
        </div>
    )
}

export default Contacts