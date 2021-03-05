import './App.css';
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import avatar from "./avatar.png"
import { skills, pieData } from "./skils";
import { Pie } from "@reactchartjs/react-chart.js";

function App() {
  return (
    <Container fluid style={{marginTop: "10px"}}>
      <Row className="justify-content-md-center mb-2">
          <Image src={avatar} height={300} width={300} style={{backgroundColor: "rgba(64, 196, 255, 1)", border: "3px solid black", margin: "0px auto"}} roundedCircle/>
      </Row>
      <Row className="justify-content-md-center mb-2">
        <Col lg="3" className="text-center">
          <b style={{fontSize: "20px"}}><a href="https://linkedin.com/in/levi-gratico-3a33a0146" rel="noreferrer" target="_blank">Levi Gratico</a></b>
          <address><a href="mailto:levigratico@gmail.com">levigratico@gmail.com</a></address>
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            ▶ <b>Skills Rating & Experience</b>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Skills</th>
                    <th>Years of Experience</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map( (skill, index) => (
                    <tr key={index + "-skills"}>
                      <td>{index + 1}</td>
                      <td>{skill.skill}</td>
                      <td>{skill.years}</td>
                      <td>
                        <ProgressBar now={skill.rate * 10} label={`${skill.rate}/10`}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          ▶ <b>Chart</b>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Row className="justify-content-md-center">
                  <Col lg="8">
                    <Pie data={pieData} />
                  </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}

export default App;
