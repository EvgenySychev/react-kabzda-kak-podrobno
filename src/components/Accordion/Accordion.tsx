import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = React.memo( (props: AccordionPropsType) => {
          return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed = {props.collapsed}/>
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
})

type AccordionTitlePropsType = {
    title: string
    onChange:(collapsed:boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=> {props.onChange(!props.collapsed)}}> {props.title} </h3>
    )
}

type AccordionBodyPropsType = {
   items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                {props.items.map((i,index) => <li onClick = {() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}