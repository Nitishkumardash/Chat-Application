import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { AiOutlinePlus } from "react-icons/ai";

const NewConversation = ({handleClick}) => {
  return (
   
     <Col sm={7} className='d-flex align-items-center justify-content-end' onClick={handleClick}>
        <Row>
                  <Col>
                      <p>New Conversation</p>
                  </Col>
                  <Col>
                      <AiOutlinePlus style={{cursor:"pointer"}}/>
                  </Col>
               </Row>
     </Col>
  )
}

export default NewConversation
