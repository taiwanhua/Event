import React, {createContext, useReducer, useEffect, useState} from "react";

//創建Context並導出
export const Topcontext = createContext({});

//給符合action格式的Type並導出
export const Topcontexttype = true;

//初始值


//創建更新State用的reducer，可以給任何state與action使用
const reducer = (state, action) => {
    console.log("old", state);
    console.log("new", action);
    console.log("----------------------")
    switch (action.type) {
        case Topcontexttype:
            return action;
        default:
            return state;
    }
};

//創建外層組件，透過props屬性，使得包裹的所有元件都可以訪問useReducer的參數[state,dispatch](主要是要調用disspatch更新State)
export const Topcontextfunction = props => {

    const [state, dispatch] = useReducer(reducer, {a:1,b:2});
    // console.log(color, dispatch);
    // console.log(props)
    const [state1, dispatch1] = useReducer(reducer, {a:3,b:4,times:0});
    return (
        <Topcontext.Provider value={{state, dispatch,state1, dispatch1}}>
            {props.children}{/*渲染子組件*/}
            {/*{console.log(props.children)}*/}
        </Topcontext.Provider>
    );
};
