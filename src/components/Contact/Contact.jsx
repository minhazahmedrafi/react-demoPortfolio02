import React, { useContext, useRef, useState } from 'react';
import './contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../context';

const Contact = () => {
    const [done,setDone] = useState(false);

    const formRef = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_1ylaakh', 'template_igxyw4m', formRef.current, 'user_rxSagy92Ogtzdcu0pvFsW')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

return (
<>
    <div className="c">
        <div className="cOverlay"></div>
        <div className="cWrapper">
            <div className="cLeft">
                <h1 className="cTitle">Let's discuss your project</h1>
                <div className="cInfo">
                    <div className="cInfoItem">
                        <img src={Phone} alt="" className="cIcon" />
                        +880 1743-228645
                    </div>
                    <div className="cInfoItem">
                        <img className="cIcon" src={Email} alt="" />
                        minhaz.jsb.dhaka420@gmail.com
                    </div>
                    <div className="cInfoItem">
                        <img className="cIcon" src={Address} alt="" />
                        Jaflong, Sylhet, Bangladesh
                    </div>
                </div>
            </div>
            <div className="cRight">
                <p className="cDesc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="email" placeholder="Email" name="user_email" />
                    <textarea name="message" id="" placeholder="Message" rows="5"></textarea>
                    <button type="submit">Submit</button>
                    {done && "Thank you..."}
                </form>
            </div>
        </div>
    </div>
</>
)
}

export default Contact