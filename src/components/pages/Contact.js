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
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38775.01625719717!2d21.432219072744584!3d52.59784406449479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ee50b7672a1bb%3A0x22977eae8b66ff03!2zxZp3acSZdG9qYcWEc2thIDE0OSwgMDctMjAyIFd5c3prw7N3!5e0!3m2!1spl!2spl!4v1638361328311!5m2!1spl!2spl"
                            style={{"width":"500px", "height":"350px", "border":"0"}} allowFullScreen="" loading="lazy"></iframe>
                            <p className="address_text">Wyszków <br/> 07-202 <br/> ul. Świętojańska 149 <br/> Tel: <br/> Email: barbeerziza@gmail.com </p>
                        </div>




                    <div className="send-email">
        <form ref={form} onSubmit={sendEmail}>

            <div className="user-box">
                <label>Imię</label>
                <input type="text" name="user_name" />
            </div>

            <div className="user-box">
                <label>Nazwisko</label>
                <input type="text" name="user_lastname" />
            </div>

            <div className="user-box">
                <label>Nr. tel.</label>
                <input type="number" name="user_phone" />
            </div>

            <div className="user-box">
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>

            <div className="user-message">
                <label>Wiadomość</label>
                <textarea name="message" />
            </div>

            <input  className="message-button" type="submit" value="Send" />

        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Contact;
