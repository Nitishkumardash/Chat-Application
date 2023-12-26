import React from 'react'
import User from './User'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const UserList = ({contactsState}) => {
  return (
            <Row style={{height:"70%",backgroundColor: "#FFDFDF"}} className='d-flex align-items-start overflow-y-scroll'>
            {contactsState.map((u)=>(
            <Link to={`/${u.id}`} className='text-dark text-decoration-none' key={u.id}>
                    <User u={u}/>
            </Link>
            ))}
        </Row>
  )
}

export default UserList
