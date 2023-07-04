import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCardTitle,
  MDBCardText
}
  from 'mdb-react-ui-kit';

import Swal from 'sweetalert2'
function UserHome() {
  const dispatch = useDispatch()
  async function handleLogout(e) {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure? logout',
      text: "logout from this account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '##a8a8a8',
      confirmButtonText: 'Yes, Logout!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.get("/user/logout")
        dispatch({ type: "refresh" })
      }
    })
  }
  return (
    <div>
    
      <MDBContainer className="my-5">

        <MDBCard>
          <MDBRow className='g-0 login-section'>

            <MDBCol md='6' className='url-form'>
              <MDBCardBody className='d-flex flex-column url-home-body'>
              <div className="logout" onClick={handleLogout}>
              <MDBIcon fas icon="sign-out-alt" />Logout 
              </div>
              <div className="url-submit-form">
              <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
              <span className="h1 fw-bold mb-0">Url Shortner</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Paste Your Link here</h5>
              <MDBInput wrapperClass='mb-4' label='Title' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Paste your Link' id='formControlLg' type='text' size="lg" />
              <MDBBtn className="mb-4 px-5 url-button" color='dark' size='lg'  >Submit</MDBBtn>
              </div>
                
              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6' className='home-url'>
              <MDBCard className='w-100 home-url-card'>
            <MDBCardBody className='url-card' >
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
            </MDBCol>


            

          </MDBRow>
        </MDBCard>

      </MDBContainer>


    </div>
  )
}

export default UserHome