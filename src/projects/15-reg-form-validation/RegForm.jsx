/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import Title from "../components/Title"
import Button from "../components/Button"
import Alert from "../components/Alert"

export default function RegForm() {
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  useEffect(() => {
    inputNameRef.current.focus();
  }, []);
  const [values, setValues] = useState({
    user_name: "",
    email: "",
    password: "",
  })
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const handleNameChange = (e) => {
    setValues({ ...values, user_name: e.target.value })
  }
  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }
  const handlePasswordChange = (e) => {
    let value = e.target.value;
    setValues({ ...values, password: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Focus Shift
    if (!values.user_name) {
      inputNameRef.current.focus();
    } else if (!values.email) {
      inputEmailRef.current.focus();
    } else if (!values.password) {
      inputPasswordRef.current.focus();
    }

    // Check for Validation
    if(values.user_name && values.email && values.password){
      setValid(true);
    }
    setSubmit(true);
  };
  return (
    <div className='m-auto'>
      {/* Alert and Welcome */}
      {submit && valid ? (<>
        <Alert type={"success"} message="Registration was successful!" delay={true} delayTime={5000} />
        <Title text={`Welcome ${values.user_name}`} />

      </>
      ) : (<div className="container m-auto mt-4 p-2 shadow-sm border-5">
        <Title text="Registration" />

        <form>
          <div className="form-group">
            <input type="text" placeholder='Enter your name' ref={inputNameRef} value={values.user_name} onChange={handleNameChange} />
            {submit && !values.user_name ? <label className='text-danger fs-sm'>Please enter your name</label> : null}
          </div> {" "}
          <div className="form-group">
            <input type="email" placeholder='Enter your email' ref={inputEmailRef} value={values.email} onChange={handleEmailChange} />
            {submit && !values.email ? <label className='text-danger fs-sm'>Please enter your email</label> : null}
          </div> {" "}
          <div className="form-group">
            <input type="password" placeholder='Enter your password' ref={inputPasswordRef} value={values.password} onChange={handlePasswordChange} />
            {submit && !values.password ? <label className='text-danger fs-sm'>Please enter your password</label> : null}
          </div> {" "}
          <Button btnClass={"btn-primary btn-lg btn-block"} text='Register' onClick={handleSubmit} />
        </form>
      </div>)}

    </div>
  )
}
