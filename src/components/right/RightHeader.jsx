import React, { useEffect } from 'react'
import { Row,Col,Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams ,useNavigate} from 'react-router-dom';
import { contactSelector } from '../../reducers/ContextReducer';



const RightHeader = () => {
  const contactsState = useSelector(contactSelector);
  const {id} = useParams();
  const uid = parseInt(id);
  const navigate =useNavigate();

  const user = contactsState.find((u)=> u.id===uid );
  useEffect(()=>{
    if(!user){
      return navigate("/")
    }
  },[user,navigate])
  console.log( "right header:-",user);
  return (
    <Row className='p-4' style={{backgroundColor:"#FF4B91"}}>
    <Col sm={1}> 
        <Image src={user.image} roundedCircle width="50px" height="50px"/>
    </Col>
    <Col sm={3}>
        <h2>{user.name}</h2>
    </Col>
</Row>
  )
}

export default RightHeader
