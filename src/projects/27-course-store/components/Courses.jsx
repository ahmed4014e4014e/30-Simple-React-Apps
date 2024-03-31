/* eslint-disable no-unused-vars */
import React from 'react'
import Course from "./Course"

export default function Courses({ list }) {
  return (
    <ul className='d-flex mt-2' style={{ flexWrap: "wrap", gap: 30 }}>
      {list.map((item)=>(
        <Course course={item} />
      ))}
    </ul>
  )
}
