import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import { Button } from "react-bootstrap";
import AtomButton from "../../components/another/atom-button";
const ContactForm = () => {

    const email = useRef()
    const text = useRef()
    const title = useRef()

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const email_params = {
            from_name: "email.current.value",
            to_name: "Łukasz",
            message: "text.current.innerHTML",
            title: "title.current.value"
        }

        emailjs
            .sendForm('service_qzp2rwj', 'template_z4x6tev', form.current, {
                publicKey: 'niSLg959mx5rx5ZeC',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="w-100" style={{ maxWidth: "1900px" }}>
            <p id="contact"></p>
            <h1 className="pt-12 ms-6 dark:text-white ps-4 text-4xl my-4 font-bold">Kontakt</h1>
            <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>
            <h2 style={{ maxWidth: "80vw" }} className="ms-6 ps-4 fs-5 dark:text-white ">Jeśli Masz jakies pytania, napisz do mnie!</h2>

            <div className="d-flex justify-content-center w-100   my-5  py-3">

                <form className="mx-5  dark:text-white dark:bg-darkGrey bg-fiolet py-4 px-1 px-sm-4  rounded-3 w-100"
                    ref={form}
                onSubmit={sendEmail}
                >
                    <div className="w-100 d-flex flex-wrap " >


                        <div class="mb-3 col-12 col-md-6 px-2">
                            <label for="emailinput" className="form-label fs-5 ">Adres email</label>
                            <input required name="from_name" type="email" className="form-control" id="emailinput" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3 col-12 col-md-6 px-2">
                            <label for="title" className="form-label fs-5">Tytuł</label>
                            <input required name="title" type="text" className="form-control" id="title" placeholder="tytuł" />
                        </div>
                    </div>
                    <div class="mb-3 px-2">
                        <label for="textarea" className="form-label">Twoja wiadomość</label>
                        <textarea required placeholder="twoja wiadomość" name="message" class="form-control" id="textarea" rows="3"></textarea>
                    </div>
                    <div className="w-100 px-2 d-flex mb-2">
                        <input style={{scale: "1.4"}} required type="checkbox" id="confirm" className="me-3 text-top" />
                        <label for="confirm">Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania przez wysłanie wiadomości e-mail na adres lukaszkepa2003@gmail.com. Administratorem danych osobowych jest Łukasz Kępa</label>
                    </div>
                    <div>

                        <AtomButton text="Wyślij wiadomość" />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ContactForm
