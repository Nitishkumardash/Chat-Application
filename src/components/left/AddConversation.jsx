import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import { TiDelete } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactSelector } from '../../reducers/ContextReducer';
import { getContacts } from '../../reducers/ContextReducer';
import UserList from './UserList';


const AddConversation = ({setShowConver}) => {
  const dispatch = useDispatch();
  const contactsState = useSelector(contactSelector);
  useEffect(()=>{
      dispatch(getContacts());
  },[dispatch])
  const handleClose = ()=>{
      setShowConver(false);
  }
  return (
    <Container style={{zIndex:"1"}}> 
           <Row className='position-fixed' style={{width:"35%",height:"60%",top:"20%",left:"60%"}}>
               <Row className='p-3 text-light' style={{backgroundColor: "#FF4B91"}}>
                <Col sm={10}> 
                      <h3>Select Contact</h3>
                  </Col>
                  <Col sm={2}>
                  <TiDelete className='fs-2' onClick={handleClose} style={{cursor:"pointer"}}/>
                  </Col>
               </Row>

              <UserList contactsState={contactsState}/>
            </Row>
    </Container>
  )
}

export default AddConversation
