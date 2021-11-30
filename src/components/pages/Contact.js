import React, {useRef} from 'react';
import emailjs from "emailjs-com";

 const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wr4vwqr', 'template_9lzlxjt', form.current, 'user_2U6soiCMqUcDXv1U575xS')
            .then((result) => {
                console.log(result.text);
                alert("Wiadomość została wysłana poprawnie!")
            }, (error) => {
                console.log(error.text);
                alert('Wystąpiły problemy techniczne. Wiadomość nie została wysłana')
            });
    };

    return (

        <section className='contact'>
            <div className="container text__container">
                <div className="contact_container">

                    <div className="address">






                    </div>


        <form ref={form} onSubmit={sendEmail}>

            <label>Imię</label>
            <input type="text" name="user_name" />

            <label>Nazwisko</label>
            <input type="text" name="user_lastname" />

            <label>Nr. tel.</label>
            <input type="number" name="user_phone" />

            <label>Email</label>
            <input type="email" name="user_email" />

            <label>Wiadomość</label>
            <textarea name="message" />

            <input type="submit" value="Send" />

        </form>
                </div>
            </div>
        </section>
    );
};


export default Contact;
