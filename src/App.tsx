import React, {useState} from 'react';
import './App.css';

import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRatin/UncontrolledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log('APP rendering')
    let [ratingValue,setRatingvalue] = useState <RatingValueType>(5)
    let [accordionCollapset,setAccordionCollapset] = useState <boolean> (false)
    let [on, setOn] = useState(false);
    return (
        <div className={"App"}>


            {/*<OnOff on={on} setOn={setOn}/>*/}
            <UnControlledOnOff onChange={setOn}/> {on.toString()}
            <Rating value={ratingValue} onClick={setRatingvalue}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapset} onClick={setAccordionCollapset}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>


            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<PageTitle title = {"This is APP Components"}/>
            <PageTitle title = {"My friends"}/>
            Article 1*/}


            {/*<Rating value = {3}/>

            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>*/}

        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return <h1>{props.title}</h1>
}



