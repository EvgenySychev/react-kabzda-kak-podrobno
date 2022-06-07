import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value:any) => void
    items: ItemType[]
}

export const Select = React.memo ((props: SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map((i,index) => <div onChange = {() => {props.onChange(i.value)}} key={index}>{i.title}</div>)}
        </div>
    )
})