import React, { useState } from 'react'
import Nav from './Nav';
import SideNav from './SideNav';
import styled from '@emotion/styled';
import menuBtn from '../images/menuBtn.PNG';
import arrow from '../images/arrow.PNG';
import { useNavigate } from 'react-router-dom';


const Menu = styled.div`
    width: 100%;
    height: 58px;
    background-color: rgb(33, 150, 243);
    display: flex;
    align-items: center;
`;

const Title = styled.h2`
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
    margin: 0;
`;

const MenuBtn = styled.img`
    margin: 0 10px;
    margin-right: 25px;
    cursor: pointer;
`;

export default function Header(props) {
    const navigate = useNavigate();
    const [sideNav, setSideNav] = useState(false);

    const goBack = () => {
        navigate(-1);
    };

    const sideNavClick = () => {
        if(!sideNav) {
            setSideNav(true);
        }else {
            setSideNav(false);
        }
    };
    if(props.nav === "setting") return <>
        <Menu>
            <MenuBtn src={arrow} onClick={goBack}/>
            <Title>My Bar settings</Title>
        </Menu>
    </>

    if (!props.nav) return <><Menu>
        <MenuBtn src={arrow} onClick={goBack}/>
    </Menu></>;

    return <>
        <Menu>
            <MenuBtn src={menuBtn} onClick={sideNavClick}/>
            <Title>My Bar</Title>
        </Menu>
        <Nav value={props} />
        <SideNav sideNav={sideNav} setSideNav={setSideNav}/>
    </>
}
