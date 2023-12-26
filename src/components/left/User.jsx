import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

 
const User = ({u}) => { 
  const chat = u.chatlog; 
  let len = chat.length; 
  const noMsg={  
      text: "no msg",
  }
  return (
      <Row className='d-flex align-items-center mt-4 border-bottom border-dark'>
         <Col sm={2}>
           <Image src={u.image} roundedCircle height="45px" width="45px"/>
         </Col>
         <Col className='lh-1'>
                <h4>{u.name}</h4>
                <p>{len>0 ? chat[len-1].text : noMsg.text}</p>
         </Col>   
      </Row>
  )
}

export default User
