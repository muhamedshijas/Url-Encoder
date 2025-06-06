import React, { useEffect } from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserLoginPage from './Pages/UserLoginPage';
import UserRegiterPage from './Pages/UserRegiterPage';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import UserHomepage from './Pages/UserHomepage';
import UserRedirect from './Pages/UserRedirect';

function App() {
  axios.defaults.baseURL = "https://url-encoder-server.onrender.com";
  axios.defaults.withCredentials = true;
  const { user, refresh } = useSelector((state) => {
    return state;
  });



  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/user/check");
      dispatch({ type: "user", payload: { login: data.loggedIn, details: data.user } })

    })()
  }, [refresh])
  console.log(user)
  return (
    <MDBContainer fluid>
      <div className="app">
        <Routes>

          {
            user.login &&
            <>
            <Route path='/' element={<UserHomepage/>}/>
            <Route path='/login' element={<Navigate to='/' />}/>
            <Route path='/signup' element={<Navigate to='/' />}/>
            <Route path='/:id' element={<UserRedirect/>}/>
            
            </>
          }

          {
            user.login === false &&
            <>
              <Route path="/login" element={<UserLoginPage />} />
              <Route path="/signup" element={<UserRegiterPage />} />
            <Route path='/' element={<Navigate to='/login' />}/>
            </>
          }
        </Routes>

      </div>
    </MDBContainer>
  );
}

export default App;
