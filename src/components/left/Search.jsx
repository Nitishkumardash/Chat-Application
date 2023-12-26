import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchContact } from "../../reducers/ContextReducer";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const find = (e)=>{
      navigate('/');
      dispatch(searchContact(e.target.value))  
  }
  return (
    <Row className="mt-3">
      <Col sm={9}>
        <Form.Control
          type="text"
          placeholder="search names"
          title="search"
          onChange={find}
        />
      </Col>
      <Col sm={3}>
        <Button style={{ backgroundColor: "#FF4B91",border:"none"}}>Search</Button>{" "}
      </Col>
    </Row>
  );
};

export default Search;
