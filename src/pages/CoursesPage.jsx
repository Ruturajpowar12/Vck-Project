import Header from "../components/Header/Header";
const CoursesPage = () =>{

    return (
        <div>
            <Header />
            <center>
            <div className="scroll-box">
                
            <h1 align="center">Our Academic Programs</h1>

            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>

            <h2>Discover Campus Life</h2><hr/>
            <video controls loop width="800" height="400"src="Videos\college-tour-FAmcnyfF.mp4" type="video/mp4"></video>

            <h2>Undergraduate Programs (UG)</h2><hr/>
            <ul typeof="circle">
                <li><b>Bachelor of Science</b> (B.Sc.)
                </li>
                <ul typeof="circle">
                    <li>Computer Science (3 years)</li>
                    <li>Information Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                </ul>
                <li><b>Bachelor of Commerce </b>(B.Com)</li>
                <ul typeof="circle">
                    <li>Computer Science (3 years)</li>
                    <li>Banking & Insurance (3 years)</li>
                </ul>
                <li><b>Bachelore Of Arts </b> (B.A)</li>
                <ul typeof="circle">
                    <li>English Literature (3years)</li>
                    <li>Psychology (3years)</li>
                </ul>
            </ul>
            <h2>Post Graduate Programs (PG)</h2><hr/>
            <ul>
                 <li><b>Masters Of Science </b> (M.Sc)</li>
                <ul typeof="circle">
                    <li>Computer Science (2years)</li>
                    <li>Information Technology (2years)</li>
                </ul>
                </ul>
                <ul>
                    <li><b>Masters Of Commerce(M.com) </b> (2years)</li>
                    <li><b>Masters Of Arts(M.A)</b> (2years)</li>
                </ul><hr/>
                <h2>Programming Detail & Free Structure (Annual)</h2>
                <table border={"1"} align="center" >
        
          <tr>
            <th>Program Type</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Annual Fee (INR)</th>
            <th>Eligibility</th>
          </tr>
          <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science</td>
            <td>3 Years</td>
            <td>₹ 85,000</td>
            <td>10+2 with PCM (50%)</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance</td>
            <td>3 Years</td>
            <td>₹ 70,000</td>
            <td>10+2 Commerce (45%)</td>
          </tr>
          <tr>
            <td>PG</td>
            <td>M.Sc. Information Technology</td>
            <td>2 Years</td>
            <td>₹ 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
          </tr>
          
          </table><hr/>
  <h2>Specialized & Vocational Courses</h2>
  <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing,
     Web Development, Data Analytics, and Soft Skills Development,
      providing specialized training for career enhancement.</p>
      Have questions about a specific course?
      <a href="http://localhost:5173/contact"><button type="button" style={{color:"white", backgroundColor:"green"}}>
                    Inquiry About Courses</button></a>


                


            </div>
            </center>
            

        </div>
    )

}

export default CoursesPage;