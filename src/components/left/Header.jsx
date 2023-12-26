import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import userImg from "../../NitishPic.jpg";
import NewConversation from '../left/NewConversation';
import AddConversation from './AddConversation';

const Header = () => {
  const [showConver,setShowConver] = useState(false);

  const handleClick = ()=>{
       setShowConver(true);
  }
  return (
   
        <Row className='p-4' style={{backgroundColor:"#FF4B91"}}>
            <Col sm={2}> 
            <Image src={userImg} roundedCircle width="55px" height="55px"/>
            </Col>
            <Col sm={3}>
                <h2>Nitish</h2>
            </Col>
            <NewConversation handleClick={handleClick}/>
            {showConver && <AddConversation setShowConver={setShowConver}/>}
        </Row>
  )
}

export default Header
