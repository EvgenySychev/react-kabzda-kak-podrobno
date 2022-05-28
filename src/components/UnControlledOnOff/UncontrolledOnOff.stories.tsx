import React from "react";
import {UnControlledOnOff} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
};

const callBack = action ('on or off clicked');

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callBack}/>;
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callBack}/>;

export const ModeChanging = () => {
    return <UnControlledOnOff onChange={callBack}/>
}

