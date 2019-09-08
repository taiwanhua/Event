import React, { useContext,useEffect } from "react";
import { Topcontext, Topcontexttype } from "../flowcontext/Topcontext";
import {FetchID} from "../repos/FetchID"

const Idfetchtest = props => {
    const {state, dispatch,state1, dispatch1 } = useContext(Topcontext);
    // console.log("state",state)
    // console.log("state1",state1)
    FetchID(3);
    FetchID(2);
    FetchID(99);
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

export default Idfetchtest;
