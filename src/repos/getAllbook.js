import React, {useEffect} from 'react';


export let x = async (par) => {
    let result = await fetch("http://127.0.0.1:8081/path/ap1/v1/testbook")
        .then(res => {
            res.clone().json();
            console.log(res.ok);
            return res;
        }, reject => console.log("failed AHUA"))
        .then(data => {
            console.log(data);
            return data.json();
        });
    console.log(par)
    console.log(result);
}


let param = new FormData();
param.append("name", "阿華");
export let y = async () => {
    let result = await fetch("http://127.0.0.1:8081/path/ap1/v1/book/f", {
        method: "POST",
        body: param
    })
        .then(res => {
            res.clone().json();
            console.log(res.ok);
            return res;
        }, reject => console.log("failed AHUA"))
        .then(data => {
            console.log(data);
            return data.json();
        });
    console.log(result);
}

