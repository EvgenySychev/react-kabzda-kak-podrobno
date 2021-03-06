import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
    }

export const UncontrolledAccordion = React.memo((props: UncontrolledAccordionPropsType) => {

    let [collapsed, setColl] = useState(true);

   const onClickButtonHandler = () => {
        collapsed ? collapsed=false : collapsed=true
        setColl(collapsed)
    }

          return (
            <div>
                <AccordionTitle title={props.titleValue} onClickButtonHandler={onClickButtonHandler} />
                {!collapsed && <AccordionBody/>}
            </div>
        )
})

type AccordionTitlePropsType = {
    title: string
    onClickButtonHandler: ()=> void
}

const AccordionTitle = React.memo ((props: AccordionTitlePropsType)=> {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={()=> {props.onClickButtonHandler()}}> -- {props.title} -- </h3>
    )
})

const AccordionBody = React.memo((props: any)=> {
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
})