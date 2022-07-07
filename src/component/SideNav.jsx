import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Base = styled.div`
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    width: 100%;
    height: 200%;
    opacity: 0;
    visibility: hidden;
`;

const Content = styled.div`
    z-index: 20;
    position: absolute;
    top: 0;
    left: -300px;
    width: 300px;
    height: 200%;
    background-color: #ffffff;
    visibility: hidden;
`;

const ContentHeader = styled.div`
    height: 140px;
    background-color: rgb(33, 150, 243);
    padding: 18px;
    padding-bottom: 0;
`;

const GoogleImg = styled.div`
    width: 70px;
    height: 70px;
    background-color: #9d00e6;
`;

const GoogleName = styled.p`
    margin-bottom: 5px;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: -1px;
`;

const GoogleMail = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: -1px;

`;

const ContentBody = styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font-size: 14px;
    color: rgb(33, 150, 243);
    text-align: center;
    margin-bottom: 15px;
    font-weight: 700;
    width: 90%;
    line-height: 30px;
    text-decoration: none;
    cursor: pointer;
    &:hover {background-color: rgba(33, 150, 243, 0.05);}
`
const SignBtn = styled.p`
    font-size: 14px;
    color: rgb(33, 150, 243);
    position: relative;
    left: 100px;
    font-weight: 700;
    line-height: 30px;
    cursor: pointer;
    &:hover {background-color: rgba(33, 150, 243, 0.05);}
`;



export default function SideNav(props) {
    const base = useRef();
    const body = document.querySelector('body');
let scrollPosition = 0;
    useEffect(() => {
        const sideNav = document.getElementById("sideNav");
        if(props.sideNav) {
        sideNav.style.visibility = "visible";
            sideNav.animate(
                {
                    transform: [
                        `translateX(0px)`,
                        `translateX(300px)`
                    ]
                },
                {
                    duration: 300,
                    fill: 'forwards',
                    easing: 'ease'
                }
            );
            base.current.style.visibility = "visible";
            base.current.style.transition = `opacity 0.3s`;
            base.current.style.opacity = 0.5;
            scrollPosition = window.pageYOffset;
            body.style.overflow = 'hidden';

            body.style.top = `-${scrollPosition}px`;
            body.style.width = '100%';

        } else {
            sideNav.animate(
                {
                    transform: [
                        `translateX(300px)`,
                        `translateX(0px)`
                    ]
                },
                {
                    duration: 300,
                    fill: 'forwards',
                    easing: 'ease'
                }
            );
            base.current.style.transition = `opacity 0.3s`;
            base.current.style.opacity = 0;
            setTimeout(() => {
                base.current.style.visibility = "hidden";
                sideNav.style.visibility = "hidden";
            }, 300);
            body.style.removeProperty('overflow');
            body.style.removeProperty('top');
            body.style.removeProperty('width');
            window.scrollTo(0, scrollPosition);
            
        }
    }, [props.sideNav]);
    useEffect(() => {
        const sideNav = document.getElementById("sideNav");
        sideNav.style.visibility = "hidden";
    }, [])
    const baseClick = () => {
        props.setSideNav(false);
    }
    // <GoogleImg />
    // <GoogleName>변상우</GoogleName>
    // <GoogleMail>bsu7959@gmail.com</GoogleMail>
    // <StyledLink to='/settings'>Settings</StyledLink>
    // <StyledLink to='/'>Sharing</StyledLink>
    // <SignBtn>Sign out</SignBtn>
    return <>
        <Base ref={base} onClick={baseClick}/>
        <Content id={"sideNav"}>
            <ContentHeader>

            </ContentHeader>
            <ContentBody>
                <StyledLink to='/ingredients'>Ingredients</StyledLink>
                <StyledLink to='/'>Cocktails</StyledLink>

            </ContentBody>
        </Content>

    </>
}
