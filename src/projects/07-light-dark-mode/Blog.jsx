/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import Title from '../components/Title'
import Button from "../components/Button"
import { ThemeContext } from './context/theme-context'

export default function Blog() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <div className='container p-1'>
            <Title text={`My Blog with ${theme} Theme`} />
            <span style={{position: "absolute", top: 10, right: 10}}>
                <Button text={theme === "dark" ? "Light": "Dark"} onClick={changeTheme} btnClass={`${theme === "dark" && "btn-light"} btn-sm`} />
            </span>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto, odio voluptates tempore, quis distinctio, saepe aliquid magnam dignissimos consectetur qui nulla similique mollitia vel commodi temporibus aperiam enim? Architecto?
            </p>
        </div>
    )
}
