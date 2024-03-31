/* eslint-disable no-unused-vars */
import React from 'react'
import Title from "../../components/Title"
import FormGroup from "../../components/FormGroup"

export default function Contact({ pageTitle }) {
  return (
    <>
      <Title text={pageTitle} classes={"text-center title-main text-primary"} />

      <form className='d-flex flex-column'>
        <FormGroup labelText="First Name" placeholder={"Enter your first name"} />
        <FormGroup labelText={"Last Name"} placeholder={"Enter your last name"} />
        <FormGroup labelText={"Email"} placeholder={"Enter you email"} />
        <input type="submit" value={"Submit"} className='btn btn-primary' />
      </form>
    </>
  )
}
