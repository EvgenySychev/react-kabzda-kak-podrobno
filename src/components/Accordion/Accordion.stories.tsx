import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callBack = action("accordion mode change event fired");
const onClickCallback = action ("some item was cklicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callBack} items={[]} onClick={onClickCallback}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callBack} items={[{title:"Dimych",value:1},{title:"Valera", value:2},{title:"Artem",value:3},{title:"Viktor",value:4}]} onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title:"Dimych",value:1},
            {title:"Valera", value:2},
            {title:"Artem",value:3},
            {title:"Viktor",value:4}
        ]}
         onClick={(id) => {alert(`user with ID ${id} should be happy`)}}/>;

}

