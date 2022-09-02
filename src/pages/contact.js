const Contact = () => {
    console.log(process.env);
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <div>
                apiKey: {process.env.REACT_APP_API_KEY}
                <br></br>
                authDomain: {process.env.REACT_AUTH_DOMAIN}
                <br></br>
                projectId: {process.env.REACT_PROJECT_ID}
                <br></br>
                storageBucket: {process.env.REACT_STORAGE_BUCKET}
                <br></br>
                messagingSenderId: {process.env.REACT_MESSAGING_SENDER_ID}
                <br></br>
                appId: {process.env.REACT_APP_ID}
                <br></br>
                ejemplox: {process.env.REACT_APP_DESCRIPTION}
            </div>
        </div>
    );
};
export default Contact;