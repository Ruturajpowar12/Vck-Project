import Header from "../components/Header/Header";
const ContactPage = () =>{

    return (
        <div>
            <Header />
             <center>
            <div className="scroll-box">
            
            <h1 style={{color:"royalblue"}}>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life,
                 our team is here to help.</p>
                 
                 <h2>General Enquiries</h2>
                 <hr></hr>
                 <b>Vivekanand College Main Campus</b><br></br>
                 [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br></br>
                 India
                 <br></br>
                 <br></br>
                 Phone: +91 12345 67890<br></br>
                 Email: info@vivekanandcollege.edu<br></br>
                 Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br></br>
                 <br></br>
                 <h2>Admissions Office</h2>
                 <hr></hr>
                 For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                 Phone: +91 98765 43210<br></br>
                 Email: admissions@vivekanandcollege.edu<br></br>
                 <br></br>
                 <h2>Student Support Services</h2>
                 <hr></hr>
                 For current student support, academic advising, or general assistance:<br></br>
                 Phone: +91 87654 32109<br></br>
                 Email: studentsupport@vivekanandcollege.edu<br></br>
                 <br></br>
                 <h2>Find Us on the Map</h2>
                 <hr></hr>
                 <br></br>
                 <a href="https://maps.google.com/?q=Vivekanand+College">View On Google Maps</a>
                 <br></br>
                 <br></br>
                 <h2>Send Us a Message</h2>
                 <hr></hr>
                 [A contact form with fields for Name, Email, Subject, Message can be added here.]<br></br>
                 <br></br>
            </div>
            </center>
        </div>
    )

}

export default ContactPage;