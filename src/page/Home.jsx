import React, { useState, useEffect } from 'react'
import Header from '../component/Header';
import Contents from '../component/Contents';

const menus = ["My cocktails", "All cocktails"];

export default function Home(props) {
    const [presentMenu, setPresentMenu] = useState(1);
    const [ings, setIngs] = useState(null);
    

    useEffect(() => {
        if(localStorage.getItem("ingList") != null) {
            setIngs(localStorage.getItem("ingList").trim().split(' '));
        }else {
            setIngs([]);
        }

        setPresentMenu(1)
    }, [])


    return <>
        <Header nav={menus} menu={presentMenu} setMenu={setPresentMenu} />
        <Contents nav={menus} menu={presentMenu} setMenu={setPresentMenu} ings={ings}/>
    </>
}
