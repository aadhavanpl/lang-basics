import React from "react";
import "./nav.css"
import { AiFillCheckCircle } from "react-icons/ai"
import { AiFillPlayCircle } from "react-icons/ai"
import { AiFillPauseCircle } from "react-icons/ai"
import { BiShowAlt } from "react-icons/bi"

const nav = () => {
    return (
        <nav>
            <button><AiFillCheckCircle/></button>
            <button></button>
            <button><AiFillPlayCircle/></button>
            <button><AiFillPauseCircle/></button>
            <button><BiShowAlt/></button>
        </nav>
    )
}

export default nav