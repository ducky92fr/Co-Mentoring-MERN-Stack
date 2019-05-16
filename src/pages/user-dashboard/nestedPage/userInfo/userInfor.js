import React, { Component } from "react";
import Container from "./container";
import ButtonGroup from "./button_group";
import "./userInfo.css";

class userInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hero-body ">
          <div className="container has-text-centered  ">
            <h1 className="title">Co-Mentoring</h1>
            <h2 className="subtitle">Dashboard</h2>
          </div>
        </div>

        <div className=" columns is-mobile is-multiline is-centered">
          <div className="column is-one-third-desktop is-four-fifths-mobile ">
            <div className="user_dashboard has-background-grey-lighter">
              <div className="columns is-desktop">
                <div className="column">
                  <div className ="content_column">
                    <figure className="image is-128x128 btn_group">
                      <img alt ="avatar "src="https://www.mariowiki.com/images/thumb/9/94/MushroomMarioKart8.png/1200px-MushroomMarioKart8.png" />
                    </figure>
                    <div className="container_content btn_group ">
                      <div className ="medal_container">
                        <div>Silver Medal</div>
                        <i className="fas fa-medal">10</i>
                      </div>
                      <div className ="medal_container">
                      <div>Gold Medal</div>
                       
                        <i className="fas fa-award">15</i>
                      </div>
                    </div>
                    <div>Name</div>
                    <div>Last Name</div>
                    <div>Skills</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-two-fifths-desktop is-four-fifths-mobile is-two-thirds-tablet">
            <div className="green ">
              <div className="columns is-desktop">
                <div className="column">
                  <Container
                    name="Duc NGUYEN"
                    date="16/02/2002"
                    message="Hello blah blah">
                    <ButtonGroup /> 
                  </Container>

                  <div className="green ">
                    <div className="columns is-desktop">
                      <div className="column">
                        <Container
                          name="Duc NGUYEN"
                          date="16/02/2002"
                          message="Hello blah blah"
                        >
                          <div>
                            name="Duc NGUYEN" date="16/02/2002" message="Hello
                            blah blah"
                          </div>
                          <div>
                            name="Duc NGUYEN" date="16/02/2002" message="Hello
                            blah blah"
                          </div>
                          <div>
                            name="Duc NGUYEN" date="16/02/2002" message="Hello
                            blah blah"
                          </div>
                        </Container>

                        <div className="green ">
                          <div className="columns is-desktop">
                            <div className="column">
                              <Container
                                name="Duc NGUYEN"
                                date="16/02/2002"
                                message="Hello blah blah"
                              >
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                              </Container>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default userInfo;