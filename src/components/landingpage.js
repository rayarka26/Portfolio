import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img style = {{objectFit: "cover", borderRadius:"70%", height:"250px", width:"250px"}}
            src="https://media.licdn.com/dms/image/C4D03AQEfDLQOAtav-g/profile-displayphoto-shrink_400_400/0/1631635709341?e=1693440000&v=beta&t=J7H0M9OoBs7RZjF7VkfiPtr9bSdYoMGAHSno7fhtoCI"
            alt="Arkaprava Ray"
            className="avatar-img"
          />

          <div className="banner-text">
          <h1 style={{fontSize : "30px"}}>Arkaprava Ray</h1>

            <h2 style={{color:"white"}}>Software Developer</h2>

            <hr style={{borderTop:" 10px dotted white"}} />

            <p style = {{color:"white"}}>
              Web-Development | Bootstrap | C++ | JavaScript | React JS | Next JS
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arkaprava-ray-2b96821ab"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true" style={{ color:"dark blue"}} />
              </a>
              <a
                href="https://leetcode.com/rayarka26/"
                rel="noopener noreferrer"
                target="_blank"
              >
              <img src = "https://cdn.iconscout.com/icon/free/png-256/leetcode-3628885-3030025.png" height = "90px" alt = "LEETCODE"/>
              </a>
              <a
                href="https://codeforces.com/profile/rayarka26"
                rel="noopener noreferrer"
                target="_blank"
              >
              <img src = "https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png" height = "90px" alt = "CODEFORCES"/>
              </a>
              <a
                href="https://www.codechef.com/users/arkapravaray"
                rel="noopener noreferrer"
                target="_blank"
              >
              <img src = "https://static-00.iconduck.com/assets.00/codechef-icon-380x512-r1v87w22.png" height = "90px" alt = "CODECHEF"/>
              </a>
              {/* <a
                href="https://www.codechef.com/users/arkapravaray"
                rel="noopener noreferrer"
                target="_blank"
              >
              <img src = "https://static-00.iconduck.com/assets.00/geeksforgeeks-icon-512x264-y71dixbv.png" height = "90px" alt = "CODECHEF"/>
              </a> */}
              {/* Github */}
              <a
                href="https://github.com/rayarka26"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              
              {/* <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </a> */}

              {/* Youtube */}
              {/* <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a> */}
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
