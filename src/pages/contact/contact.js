const ContactForm = () => {
    return (
        

            <div className="w-full" style={{maxWidth : "1900px"}}>
                <p id="contact"></p>
                <h1 className="pt-12 ms-6 dark:text-white ps-4 text-4xl my-4 font-bold">Kontakt</h1>
                <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>
                <h2 className="ms-6 ps-4 fs-5 dark:text-white">Jeśli masz jakieś pytania, napisz do mnie</h2>
                <div className="w-full justify-content-center d-flex">


                    <div className="bg-white p-2 col-12 col-10 mb-12" style={{ maxWidth: "1000px" }}>

                        <iframe title="contact form" src="https://www.cognitoforms.com/f/4sAj-d0vkkSpgxh2b_acLQ/1" style={{ padding: "10px", width: "100%" }} height="493"></iframe>
                    </div>
                </div>
            </div>

    )
}
export default ContactForm