import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Arkaprava Ray</h2>
            <img 
        src="https://media.licdn.com/dms/image/C4D03AQEfDLQOAtav-g/profile-displayphoto-shrink_400_400/0/1631635709341?e=1693440000&v=beta&t=J7H0M9OoBs7RZjF7VkfiPtr9bSdYoMGAHSno7fhtoCI"
            alt="avatar"
            className="avatar-img"
          />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Pursuing BE from Jadavpur University with an excellent academic record. I have keen interest in learning new concepts and am always in search of new opportunities. I am a dedicated, sincere student and also a quick learner, want to work in dynamic and challenging work atmosphere. </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <a href="tel:+9330477476" style={{color:"black"}}>+91 9330477476 </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    033-2548-6478
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <a href="mailto:arkapravaray.col@gmail.com"style={{color:"black"}}><i className="fa fa-envelope" aria-hidden="true"/>
                    arkapravaray.col@gmail.com</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                   <a href='https://www.linkedin.com/in/arkaprava-ray-2b96821ab' style={{color:"black"}}> <i className="fa fa-linkedin" aria-hidden="true"/>
                    arkaprava-ray-2b96821ab </a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
