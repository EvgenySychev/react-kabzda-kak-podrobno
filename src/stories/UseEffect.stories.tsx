import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect',
};

export const SetTimeoutExample = () => {
    const [text,setText] = useState('')
    console.log('Component rendered')

    useEffect(()=> {
        const timeoutID = setTimeout(()=> {
            setText('3 seconds')
            },3000)
        return () => {
            clearTimeout(timeoutID)
        }
    },[])

    return <>
        {text}
    </>
}

export const useEffectExample = () => {
    const [counter, setCounter] = useState(0)
    console.log('component rendered with' + counter)

    useEffect(()=> {
        console.log('effect occured' + counter)

        return () => {
            console.log('EFFECT CLEAR' + counter)
        }

    },[])
return <>
counter = {counter} <button onClick={()=> { setCounter(counter+1)}} >+</button>
</>

}
