/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from 'react'
import Title from "../components/Title"
import { ProgressBar } from '../components/ProgressBar';

export default function ProgressBarsContainer() {
    const [completed, setCompleted] = useState(0);
    const [status, setStatus] = useState({
        ui: 55,
        ux: 33,
        data: 20,
    });
    const projectData = [
        {bgColor: "#7633f9", completed: status.ui},
        {bgColor: "#28a745", completed:status.ux},
        {bgColor: "#dc3545", completed: status.data},
    ];
    const inputStyle = {
        width: 50,
        border: "none",
        outline: "none",
        textAlign: "center",
        borderBottom: "1px solid lightgray",
    }
    const uiInput = useRef(null);
    useEffect(()=>{
        uiInput.current.focus();
        setInterval(()=>{
            setCompleted(Math.floor(Math.random() * 100) + 1)
        }, 2000);   
    }, [])
    return (
        <div className='container container-sm mx-auto text-center'>
            <Title text={"Progress bars"} classes={"title text-center"} />
            <h2>Project Status: </h2>
            <ul>
                <li>UI Status: {" "} <input type="number" style={inputStyle} ref={uiInput} value={status.ui} onChange={(e) => setStatus({...status, ui: e.target.value})} /></li>
                <li>UX Status: {" "}<input type="number" style={inputStyle} value={status.ux} onChange={(e) => setStatus({...status, ux: e.target.value})} /></li>
                <li>DATA Status: {" "} <input type="number" style={inputStyle} value={status.data} onChange={(e) => setStatus({...status, data: e.target.value})} /></li>
            </ul>
            {/* Progress */}
            {projectData.map((data, idx) => (
                <ProgressBar key={idx} bgColor={data.bgColor} completed={data.completed} />
            ))}
             <ProgressBar bgColor={completed > 50 ? "#7633f9" : "#dc3545"} completed={completed} />
        </div>
    )
}
