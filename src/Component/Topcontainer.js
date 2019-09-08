import React, {useState, useEffect, useContext} from 'react';
import {Topcontextfunction} from "../flowcontext/Topcontext";
import Chartcomponent from "./Chartcomponent"
import Idfetchtest from  "../Component/Idfetchtest"

function Topcontainer(props) {


    return (
        <Topcontextfunction>
            <Chartcomponent/>
            <Idfetchtest/>
        </Topcontextfunction>
    );
}

export default Topcontainer;
