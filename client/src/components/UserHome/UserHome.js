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
  MDBInput
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
    <div>UserHome
      <button onClick={handleLogout}>Logout</button>
      <MDBContainer className="my-5">

        <MDBCard>
          <MDBRow className='g-0 login-section'>

            <MDBCol md='6' className='login-form'>
              <MDBCardBody className='d-flex flex-column home-body'>

                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                  <span className="h1 fw-bold mb-0">Url Shortner</span>
                </div>
                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                <MDBBtn className="mb-4 px-5" color='dark' size='lg'  >Login</MDBBtn>
                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6' className='home-url'>
              <MDBCard className='home-url-card'>
                <MDBCardBody className='url-card'>This is some text within a card body.</MDBCardBody>
              </MDBCard>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>


    </div>
  )
}

export default UserHome