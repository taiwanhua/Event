import React, { useContext } from "react";
import { Topcontext, Topcontexttype } from "../flowcontext/Topcontext";

const Chartcomponent = props => {
    const {state, dispatch,state1, dispatch1 } = useContext(Topcontext);
    // console.log("state",state)
    // console.log("state1",state1)
    return (
        <React.Fragment>
            <button
                onClick={(e) => {
                    dispatch({ ...state,type: Topcontexttype, state: "red" ,d:2,event:e.target});
                }}
            >
                state红色
            </button>
            <button
                onClick={() => {
                    dispatch({ ...state,type: Topcontexttype, state: "yellow" });
                }}
            >
                state黄色
            </button>
            {JSON.stringify(state.state)}
            <button
                onClick={() => {
                    dispatch1({ ...state1,type: Topcontexttype, state: "red1111" ,d:2});
                }}
            >
                state红色
            </button>
            <button
                onClick={() => {
                    dispatch1({ ...state1,type: Topcontexttype, state: "yellow1111" });
                }}
            >
                state黄色
            </button>
            {JSON.stringify(state1.times)}
        </React.Fragment>
    );
};

export default Chartcomponent;
