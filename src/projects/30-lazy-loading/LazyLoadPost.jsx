/* eslint-disable no-unused-vars */
import React from 'react'
import Title from "../components/Title"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"


export default function LazyLoadPost({ title, img }) {
  return (
    <div className='card mb-4'>
      <div className="card-header">
        {!title ? (
          <Title classes={"subtitle"} text="Post Title" />
        ) : (
          <Title classes={"subtitle"} text={title} />
        )}
      </div>
      <div className="card-body d-flex" style={{ gap: 10 }}>
        <LazyLoadImage src={img} height={"fit-content"}  width={500} effect='blur' />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor deleniti quae tenetur odio consequuntur necessitatibus! Quod nobis excepturi eum eaque doloribus, modi officia in quia ab, assumenda, dicta ad. Harum?
        </p>
      </div>
    </div>
  )
}
