import './App.css';
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { skills, pieData } from "./skils"
import { Pie } from "@reactchartjs/react-chart.js";

function App() {
  return (
    <Container fluid style={{marginTop: "10px"}}>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            ▶ Skills Rating & Experience
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
          ▶ Chart
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
