import React from 'react';
import { Image } from 'react-bootstrap';;


const LeftChatBubble = ({message,image}) => {
  return (
    <div className="d-flex flex-row justify-content-start">
      <Image src={image} roundedCircle width="55px" height="55px"/>
    <div className='ms-3'>
      <p className="small p-2 me-3 mb-1 text-white rounded-3" style={{backgroundColor:"#FF4B91"}}>{message.text}
      </p>
      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">{message.timestamp}</p>
    </div> 
  </div>
  )
}

export default LeftChatBubble;
