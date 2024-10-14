import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';


const Home = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
    console.log("******************************" + event.target.name + "**" + event.target.value + "*" + JSON.stringify(inputs));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('submit clicked  ${inputs}');
    window.location.href="/contact";
  }

  return (
    <>
      <h1 class='Home'>Home</h1>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="outline-primary" size="lg">A</Button>{' '}
      <Button variant="primary" size="sm"><span>&#8646;</span></Button>{' '}
      <Button variant="outline-primary" size="lg">B</Button>{' '}

      <Form onSubmit={handleSubmit}>
        <Row>
        <Col></Col>
        <Col>
          <Form.Group className="text-center mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><h2>Name</h2></Form.Label>
            <Form.Control className="text-center"  type="text" placeholder="name" name="name" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="text-center mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label><h2>Code</h2></Form.Label>
            <Form.Control className="text-center"  type="text" placeholder="code" name="code" onChange={handleChange} />
          </Form.Group>
          <br/>
          <div class="text-center">
              <Button variant="primary" type="submit" className="center">Submit</Button>
          </div>
        </Col>
        <Col></Col>
        </Row>
      </Form>

    </>
  );
};

export default Home;
