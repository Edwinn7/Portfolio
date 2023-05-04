import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/Captura2.PNG";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/Captura3.PNG";
import projImg5 from "../assets/img/Captura4.png";
import projImg from "../assets/img/Captura.PNG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather app",
      description:"Program that shows the weather information and time of the requested location. (Click on view to see live)",
      imgUrl: projImg1,
      linkUrl:"https://app-meteorologica-5e217.web.app/"
    },
    {
      title: "Restaurant",
      description: "Restaurant website for registering dishes, employees and reservations",
      imgUrl: projImg,
      linkUrl:"https://github.com/Edwinn7/restaurante"
    },
    {
      title: "Hotel",
      description: "interface of a hotel in developed angular",
      imgUrl: projImg2,
      linkUrl:"https://github.com/Edwinn7/InterfazHotel"
    },
    {
      title: "News App",
      description: "Simple news application, allows you to view and search for the latest relevant news. (Click on view to see live)",
      imgUrl: projImg4,
      linkUrl:"https://appetize.io/app/fxf5dboitmzcya6huntvb3i57a?device=pixel4&osVersion=11.0&scale=75"
    },
    {
      title: "Chat App",
      description: "Simple messaging application, it allows the interaction of several users, it is allowed to attach files and it is in real time with the chatengine.io api",
      imgUrl: projImg5,
      linkUrl:"https://github.com/Edwinn7/ChatApp"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of the most recent projects I have carried out</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Soon...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Soon...</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>Soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
