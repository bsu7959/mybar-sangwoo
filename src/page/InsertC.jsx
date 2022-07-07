import React, { useState } from 'react'
import { useEffect } from 'react';

export default function InsertC() {
    const [ings, setIngs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:80/alling", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setIngs(json);
            });
    }, [])

    function render() {
        const arr = [];
        console.log(ings)
        if(ings != null) {
            arr.push(<>{ings.map(function (ing) {
                return <label><input type={"checkbox"} value={ing.i_name} idx={ing.i_idx}/>{ing.i_name}</label>
                })
            }</>)

        }
        return arr;
    }

    function insertIng() {
        const ingname = document.getElementById("ingname").value;
        const ingdesc = document.getElementById("ingdesc").value;
        const ingimg = document.getElementById("ingimg").value;
        console.log(ingname+" "+ingdesc+" "+ingimg)
        const post = {
            name: ingname,
            desc: ingdesc,
            img: ingimg,
        }
        fetch("http://localhost:80/inserting", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
    }

    function insertc() {
        const cockname = document.getElementById("cockname").value;
        const cockdesc = document.getElementById("cockdesc").value;
        const cockrecipe = document.getElementById("cockrecipe").value;
        const cockimg = document.getElementById("cockimg").value;
        const post = {
            name: cockname,
            desc: cockdesc,
            recipe: cockrecipe,
            img: cockimg,
        }
        fetch("http://localhost:80/insertc", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
    }

    return <>
    {render()}
    <input type={"text"} id={"cockname"} placeholder={"cockname"}/>
    <input type={"textarea"} id={"cockdesc"} placeholder={"cockdesc"} style={{ width: "300px", height: "100px" }}/>
    <input type={"textarea"} id={"cockrecipe"} placeholder={"cockrecipe"} style={{ width: "300px", height: "100px" }}/>
    <input type={"text"} id={"cockimg"} placeholder={"cockimg"}/>
    <br/>
    <br/>
    <br/>
    <input type={"text"} id={"ingname"} placeholder={"ingname"}/>
    <input type={"textarea"} id={"ingdesc"} placeholder={"ingdesc"} style={{ width: "300px", height: "100px" }}/>
    <input type={"text"} id={"ingimg"} placeholder={"ingimg"}/>
    <input type={"button"} value={"inserting"} onClick={() => insertIng()}/>
        </>
}
