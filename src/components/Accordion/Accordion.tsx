import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
          return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed = {props.collapsed}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick:(collapsed:boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=> {props.onClick(!props.collapsed)}}> {props.title} </h3>
    )
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>{props.title} 1</li>
                <li>{props.title} 2</li>
                <li>{props.title} 3</li>
            </ul>
        </div>
    )
}