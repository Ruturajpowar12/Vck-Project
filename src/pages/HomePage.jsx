import Header from "../components/Header/Header";

const HomePage = () =>{

    return (
        <div>
            <Header/>
       

        <div className="content">
           
            
            <div className="scroll-box">
            <center>
                <div className="hero-section">
            
            <img className="imgae" src="Images\college-banner-Cz0xylpt.png"alt="vck" style={{ width: "800px", height: "800x" }}></img>
            <div className="hero-overlay-text">
                <h1 align="centre"> Welcome to Vivekanand College</h1><br/>
            <h3>Your journey to excellence starts here.</h3>
            <a href="http://localhost:5173/admission"><button type="button" style={{color:"white", backgroundColor:"green"}}>Apply Now!
                </button></a><br></br>
                </div>
                </div>
           
           <br></br>
            <p>Vivekanand College is a premier educational institution dedicated to fostering 
            academic excellence, innovation, and holistic development. Established in 1980, we have
            proudly served generations of students, empowering them to achieve their full potential.
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks.
            Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique
            ecosystem where curiosity thrives and future leaders are shaped.</p></center>
            <center><h3>Why Choose Vivekanand College</h3>
            
                <ul>
                    <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                    <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                    <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                    <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
                    </ul>
                    <br></br>
                    <h2>Campus Life & Facilities</h2></center>
                 <hr></hr><center>
                 <img src="../Images\students-studying-DbLGuwF_.jpeg" alt="a"  style={{ width: "400px", height: "200px" }}></img>
                 <img src="../Images\campus-life-Crkero7B.jpg" alt="b"  style={{ width: "400px", height: "200px" }}></img> 
                 <br></br>
                  Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
                 <br></br>
                 <br></br>
                 Ready to explore our courses?
                 <br></br>
                 <br></br>
                 <a href="http://localhost:5173/courses"><button type="button" style={{color:"white", backgroundColor:"green"}}>
                    Explore Courses</button></a>
                </center>
            
        </div>
        </div>
         </div> 
    )

}

export default HomePage;