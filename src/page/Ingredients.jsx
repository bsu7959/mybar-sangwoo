import React, { useState, useEffect } from 'react'
import Header from '../component/Header';
import IngredientsContents from '../component/IngredientsContents';

const menus = ["My bar shelf", "Manage bar shelf"];

export default function Ingredients() {

    const [presentMenu, setPresentMenu] = useState(1);
    const [ingList, setIngList] = useState(null);

    useEffect(() => {
        if(localStorage.getItem("ingList") != null) {
            setIngList(localStorage.getItem("ingList").trim().split(' '));
        }else {
            setIngList([]);
        }

    },[])


    return <>
        <Header nav={menus} menu={presentMenu} setMenu={setPresentMenu}/>
        <IngredientsContents nav={menus} menu={presentMenu} setMenu={setPresentMenu} ingList={ingList} setIngList={setIngList}/>
    </>
}
