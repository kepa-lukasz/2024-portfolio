import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { Button } from "react-bootstrap";
import "./contact.css"
import { validate } from "./validation";
import AtomButton from "../../components/another/atom-button";
const ContactForm = () => {

    const [emailInfo, setEmailInfo] = useState(false);
    const [titleInfo, setTitleInfo] = useState(false);
    const [messageInfo, setMessageInfo] = useState(false);
    const [checkboxInfo, setCheckboxInfo] = useState(false);

    const [button_clicked, setButton_clicked] = useState(false)

    const [email_sended, set_email_sended] = useState(-1)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setButton_clicked(true)

        if (!validate(form, setCheckboxInfo, setEmailInfo, setMessageInfo, setTitleInfo)) {
            document.getElementById("contact").scrollIntoView();
            setButton_clicked(false)
            return
        }

        const email_params = {
            from_name: "email.current.value",
            to_name: "Łukasz",
            message: "text.current.innerHTML",
            title: "title.current.value"
        }

        setButton_clicked(true)

        emailjs
            .sendForm('service_qzp2rwj', 'template_z4x6tev', form.current, {
                publicKey: 'niSLg959mx5rx5ZeC',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    set_email_sended(0)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setButton_clicked(false);
                    set_email_sended(1)
                },
            );
    };

    return (
        <div className="w-100 square-con" style={{ maxWidth: "1900px" }}>
            <div className="squares d-none d-md-block">

                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
            <p id="contact"></p>
            <h1 className="pt-12 ms-6 dark:text-white ps-4 text-4xl my-4 font-bold">Kontakt</h1>
            <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>
            <h2 style={{ maxWidth: "80vw" }} className="ms-6 ps-4 fs-5 dark:text-white ">Jeśli Masz jakies pytania, napisz do mnie!</h2>

            <div className="d-flex justify-content-center w-100   my-5  py-3">

                <form className="mx-5  dark:text-white dark:bg-darkGrey bg-fiolet pt-4 px-1 px-sm-4 rounded-3 w-100"
                    ref={form}
                    onSubmit={sendEmail}
                    style={{ zIndex: 10 }}
                >
                    <div className="w-100 d-flex flex-wrap " >
                        <div class="mb-3 col-12 col-md-6 px-2">
                            <label for="emailinput" className="form-label fs-5 ">Adres email</label>
                            <input onInput={() => { setEmailInfo(false) }} required name="from_name" type="email" className="form-control" id="emailinput" placeholder="name@example.com" />
                            <div className={(emailInfo) ? "validationInfo display" : "validationInfo"}>
                                Podaj proszę poprawny email
                            </div>
                        </div>
                        <div class="mb-3 col-12 col-md-6 px-2">
                            <label for="title" className="form-label fs-5">Tytuł</label>
                            <input onInput={() => { setTitleInfo(false) }} required name="title" type="text" className="form-control" id="title" placeholder="tytuł wiadomości" />
                            <div className={(titleInfo) ? "validationInfo display" : "validationInfo"}>
                                Podaj proszę tytuł wiadomości
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 px-2">
                        <label for="textarea" className="form-label">Twoja wiadomość</label>
                        <textarea onInput={() => { setMessageInfo(false) }} required placeholder="treść wiadomości" name="message" class="form-control" id="textarea" rows="3"></textarea>
                        <div className={(messageInfo) ? "validationInfo display" : "validationInfo"}>
                            Podaj proszę treść wiadomości
                        </div>

                    </div>
                    <div className="w-100 px-2 d-flex mb-2">

                        <input name="confirmation" onInput={() => { setCheckboxInfo(false) }} style={{ scale: "1.4" }} required type="checkbox" id="confirm" className="me-3 text-top" />

                        <label for="confirm">Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania przez wysłanie wiadomości e-mail na adres lukaszkepa2003@gmail.com. Administratorem danych osobowych jest Łukasz Kępa</label>
                    </div>
                    <div className=" ps-1">


                        <div className={(checkboxInfo) ? "validationInfo display" : "validationInfo"}>
                            Bez potwierdzenia wysłanie emaila nie jest możliwe
                        </div>

                        <div className={
                            ((email_sended === 0) ? " success" : (email_sended === 1) ? "fail" : null)
                        }>
                            <div className="submit-con">

                                <AtomButton disabled={button_clicked} text="Wyślij wiadomość" />
                            </div>
                            
                        </div>
                        <p className={(email_sended === 1) ? "fail_info" : "none"}>
                            Skontaktuj się drogą mailową na<br />
                            <a className="fs-5" href="mailto:lukaszkepa2003@gmail.com">
                                lukaszkepa2003@gmail.com
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ContactForm
