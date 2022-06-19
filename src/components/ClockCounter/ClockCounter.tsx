import React, {useEffect} from "react";
import {useState} from "react";

export const ClockCounter = () => {
    const [seconds, setSeconds] = useState(55)
    const [minutes, setMinutes] = useState(59)
    const [hours, setHours] = useState(0)


    useEffect(() => {
        setInterval(() => {
            setSeconds(s => s + 1)
        }, 1000)
    }, [])

    if (seconds===60) {
        setSeconds(0)
        setMinutes(minutes + 1)
    }

    if (minutes === 60) {
        setSeconds(0)
        setMinutes(0)
        setHours(hours+1)
    }

    return (
        <div>
            {`${hours}:${minutes}:${seconds}`}
        </div>)
}