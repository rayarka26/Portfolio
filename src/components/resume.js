import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import pdf from "./ArkapravaRay_CV.pdf";

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img style = {{objectFit: "cover", borderRadius:"70%", height:"250px", width:"250px"}}
            src="https://media.licdn.com/dms/image/C4D03AQEfDLQOAtav-g/profile-displayphoto-shrink_400_400/0/1631635709341?e=1693440000&v=beta&t=J7H0M9OoBs7RZjF7VkfiPtr9bSdYoMGAHSno7fhtoCI"
            alt="avatar"
            className="avatar-img"
          />
            </div>

            <h2 style={{paddingTop: '2em'}}>Arkaprava Ray</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a BE student at Jadavpur University with an excellent academic record. I'm a quick learner with a keen interest in new concepts and opportunities. I'm dedicated and sincere, and I thrive in dynamic and challenging work environments.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>377/4 Jawpur Road, Kolkata - 700074, West Bengal, India</p>
            <h5>Phone</h5>
            <p>9330477476</p>
            <h5>Email</h5>
            <p>arkapravaray.col@gmail.com</p>
            <h5>Linkedin</h5>
            <p>arkaprava-ray-2b96821ab</p>
          <h5>Want To Download Detailed CV: </h5><a href={pdf}><button style={{backgroundColor: "white",
  color: "black", fontSize: "16px", cursor: "Pointer", textAlign:"center",
  border: "2px solid #008CBA"}}> Click To Download </button></a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2024}
              schoolName="Jadavpur University"
              schoolDescription="
              BE Production Engineering"
              schoolAbout = "Key Courses Taken: Data Structures and Algorithms, Operation Research, Supply Chain Management, Numerical Methods"
               />

               <Education
                 startYear={2017}
                 endYear={2019}
                 schoolName="Sri Aurobindo Institute of Education"
                 schoolDescription="Science "
                 schoolAbout = "Key Courses Taken: Computer Science, Physics, Chemistry, Mathemathics"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2022}
              endYear={2022}
              jobName="Research Intern"
              jobDescription="Indian Institute of Technology Kharagpur -- Industrial and Systems Engg Dept"
              jobDescription2=" I worked on designing the “Optimal Buyback Strategy for Remanufacturing of Car Engines”. I developed the model and solved it using optimization algorithms to draw up the best remanufacturing strategy which would be profitable for both buyer and manufacturer. We further aim to solve the problem with a greater number of algorithms to strong our hold on our concluded strategies."
              />
              {/* <Achievements
              <ul>
                <l1> Leetcode 1694 Highest</l1>
              </ul>
              /> */}


              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="SQL"
                    progress={80}
                    />
                    <Skills
                      skill="React JS"
                      progress={25}
                      />
                      <Skills
                      skill="Power BI"
                      progress={85}
                      />
                      <Skills
                      skill="Next JS"
                      progress={85}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
