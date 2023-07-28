import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(

        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: 'white', height: '176px',backgroundImage: 'url("data:image/jpeg;base64,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")'}} >Chrome Extension</CardTitle>
            <CardText>
              Chrome extension using the popular Dad Jokes Extension
            </CardText>
            <CardActions border>
            <a href='https://github.com/rayarka26/Arka-s-Jokes'><Button colored>GitHub</Button></a>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: 'white', fontWeight:" bold", height: '176px',backgroundImage: 'url("https://png.pngtree.com/png-vector/20191005/ourmid/pngtree-checklist-on-to-do-list-form-illustration-with-man-signing-a-png-image_1794620.jpg")'}} >To-Do</CardTitle>
            <CardText>
              A To Do list made using ReactJS and Material UI icons
            </CardText>
            <CardActions border>
            <a href='https://github.com/rayarka26/ToDoList'><Button colored>GitHub</Button></a>
              {/* <Button colored>CodePen</Button> */}
            <a href='https://rayarka26.github.io/ToDoList/'><Button colored>Live Demo</Button></a>  
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundImage: 'url(https://cdn.jim-nielsen.com/ios/512/weather-2019-02-07.png'}} >Weather App</CardTitle>
            <CardText>
              Weather App in ReactJS using Openweather API to fetch latest weather data
            </CardText>
            <CardActions border>
              <a href='https://github.com/rayarka26/weather-app'><Button colored>GitHub</Button></a>
              {/* <Button colored>CodePen</Button> */}
              <a href='https://rayarka26.github.io/weather-app/'><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          {/* <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </Grid>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: 'white', height: '176px',backgroundImage: 'url("data:image/jpeg;base64,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")'}} >Chrome Extension</CardTitle>
            <CardText>
              Chrome extension using the popular Dad Jokes Extension
            </CardText>
            <CardActions border>
            <a href='https://github.com/rayarka26/Arka-s-Jokes'><Button colored>GitHub</Button></a>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      )
    }
    // } else if(this.state.activeTab === 2) {
    //   return (
    //     <div><h1>This is VueJS</h1></div>
    //   )
    // } else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    }

  



  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          {/* <Tab>Machine Learning</Tab> */}
          {/* <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
