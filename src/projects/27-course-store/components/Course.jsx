/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useContext} from 'react'
import Button from "../../components/Button"
import { CurrencyContext } from '../context/CurrenciesContext'


export default function Course({course}) {
  const currency = useContext(CurrencyContext);

  const {title, img, price} = course;

  const contextPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(price * currency.conversationRate)

  // Change Course Bg dep. on Cur
  const [courseBg, setCourseBg] = useState();
  useEffect(()=>{
    if(currency.code === "USD"){
      setCourseBg("card-light");
    }
    if (currency.code === "EUR"){
      setCourseBg("card-accept");
    }
    if(currency.code === "GBP"){
      setCourseBg("card-danger");
    }

  }, [currency.code])


  return (
    <li className={`card ${courseBg} mb-2`} style={{ width: 250 }}>
      <div className="card-header">{title}</div>
      <img src={img} alt="course img" style={{ height: "100%" }} />
      <p className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum, hic at, dignissimos corrupti accusantium nihil eum et inventore, tempore laborum. Optio vel enim voluptas incidunt quod ea quasi quaerat?
      </p>
      <div className="card-footer d-flex space-between">
        <h4>{contextPrice}</h4>
        <Button btnClass={"btn-success"} text='BUY' />
      </div>
    </li>
  )
}
