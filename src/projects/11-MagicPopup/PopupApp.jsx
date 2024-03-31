/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import Popup from '../components/Popup.component'
import Button from "../components/Button"
import Title from "../components/Title"

export default function PopupApp() {
    const [trigger, setTrigger] = useState(false);
    const [timeTrigger, setTimeTrigger] = useState(false);
    const [timeTriggerWarning, setTimeTriggerWarning] = useState(false);

    const triggerPopup = () => {
        //console.log("trigger popup");
        setTrigger(true);
    }
    useEffect(()=>{
        setTimeout(()=>{
            setTimeTrigger(true);
        }, 3000);
        setTimeout(()=>{
            setTimeTriggerWarning(true);
        }, 8000);
    }, [])
    return (
        <div className='text-center'>
            <Title text={"Click for popup, or wait for 3 seconds"} />
            <Button btnClass={"btn-primary"} onClick={triggerPopup} />
            <Popup type={"alert-info"} title={"Triggered Popup"} text={"This popup was triggered by a button"} handleClose={(setTrigger)} trigger={trigger} />{" "}
            <Popup type={"alert-danger"} title={"Time Triggered Popup"} text={"This popup was triggered by a delay"} handleClose={(setTimeTrigger)} trigger={timeTrigger} />
            <Popup type={"alert-warning"} title={"Time Warning Triggered Popup"} text={"This popup was triggered by a delay warning"} handleClose={(setTimeTriggerWarning)} trigger={timeTriggerWarning} />
        </div>
    )
}
