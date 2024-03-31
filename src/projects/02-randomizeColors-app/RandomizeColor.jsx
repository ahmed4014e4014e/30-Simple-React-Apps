/* eslint-disable no-unused-vars */
import React from 'react'
import Title from "../components/Title"


export default function RandomizeColor() {

  const handleClick = (e) => {
    //console.log(e.target);
    //console.log(getRandomColor());
    document.body.style.backgroundColor = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  }

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
      color += letters[Math.floor((Math.random() * 16))];
    }
    return color;
  }
  return (
    <div className='container m-auto text-center'>
      <Title text={"Randomize Color"} classes={"mb-4"} />
      <button className='btn btn-danger' onClick={handleClick}>Click me</button>
      <button className='btn btn-success' onClick={handleClick}>Click me</button>
      <button className='btn btn-primary' onClick={handleClick}>Click me</button>
      <button className='btn btn-warning' onClick={handleClick}>Click me</button>

    </div>
  )
}
