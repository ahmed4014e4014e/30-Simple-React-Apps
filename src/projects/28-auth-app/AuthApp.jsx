/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import Title from "../components/Title"
import FormGroup from "../components/FormGroup"
import Auth from "./components/Auth"
import { Wrapper } from "./components/Wrapper.style"
import { AuthContext } from './context/auth-context'


export default function AuthApp() {

  //Autofocus
  const inputName = useRef(null);
  useEffect(() => { inputName.current.focus() }, [])

  //Ui Control
  const [ui, setUi] = useState({
    wrapper: true,
    title: "Authenticator",
  });
  // Animation State 
  const [animatedDenied, setAnimatedDenied] = useState(false);

  // Control name and password
  const [userAuth, setUserAuth] = useState({
    name: "",
    password: "",
  })

  const handleChangeName = (e) => {
    setUserAuth({ ...userAuth, name: e.target.value });
  }
  const handleChangePassword = (e) => {
    setUserAuth({ ...userAuth, password: e.target.value });
  }

  const [authStatus, setAuthStatus] = useState(null);

  const login = () => {
    if (userAuth.name === "Norbert" && userAuth.password === "1234") {
      setAuthStatus(true);
      authenticate();
      clearInputs();
    } else {
      setAuthStatus(false);
      setAnimatedDenied(true);
      setTimeout(() => {
        setAnimatedDenied(false);
      }, 600);
    }
  }
  function authenticate() {
    setUi({
      wrapper: false,
      title: `Welcome ${userAuth.name}`
    });
  }
  
  function clearInputs() {
    setUserAuth({
      name: "",
      password: "",
    });
  }

  const logout = () => {
    window.location.reload(true);
  }

  return (
    <div className='container' style={{ width: 300 }}>
      <Title text={ui.title} />
      <AuthContext.Provider value={{ status: authStatus, login: login, logout: logout }} >
        {ui.wrapper && (
          <Wrapper className={animatedDenied && "active"}>
            <FormGroup labelText={"User name"} inputType={"text"} placeholder={"Enter your name"} reference={inputName} values={userAuth.name} onChange={handleChangeName} />
            <FormGroup labelText={"Password"} inputType={"password"} placeholder={"Enter your password"} values={userAuth.password} onChange={handleChangePassword} />
          </Wrapper>
        )}
        <Auth />
      </AuthContext.Provider>

    </div>
  )
}
