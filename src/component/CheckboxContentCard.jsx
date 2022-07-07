import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ContentCard = styled.div`
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 #cccccc;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: -1px;
    position: relative;
    &:hover {
        background-color: rgba(200,200,200,0.15);
    }
`;

const ContentImg = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 10px;
    margin-left: 10px;
`;


const CheckboxContainer = styled.div`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 2px solid black;
    position: absolute;
    top: 35%;
    right: 30px;
    z-index: 5;
`;

const HiddenCheckbox = styled.input`
    width: 16px;
    height: 16px;
    margin: 0;
    visibility: hidden;
`;
const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
    position: absolute;
`;

export default function CheckboxContentCard(props) {
    const checkboxf = useRef();
    const list = props.ingList;
    useEffect(()=>{
        for (let el of list) {
            if (el == props.idx) {
                checkboxf.current.parentNode.style.background = "rgb(33, 150, 243)";
                checkboxf.current.parentNode.style.border = "none";
                checkboxf.current.checked = "true"
                break;
            }
        }
    },[])

    const onChange = (checked, tt, idx) => {
        if (checked) {
            tt.parentNode.style.background = "rgb(33, 150, 243)";
            tt.parentNode.style.border = "none";
            list.push(idx);
            props.setIngList(list);
            localStorage.setItem("ingList", props.ingList.join(' '))
            console.log(props.ingList)
        } else {
            tt.parentNode.style.background = "#ffffff";
            tt.parentNode.style.border = "2px solid black";
            for(let el in list) {
                if(parseInt(list[el]) == idx) {
                    list.splice(el, 1);
                    props.setIngList(list);
                    localStorage.setItem("ingList", props.ingList.join(' '))
                    console.log(props.ingList)
                    break;
                }
            }
        }
    }

    const url = `/ingdesc?i_idx=${props.idx}`;
    return (
        <StyledLink to={url} >
        <ContentCard >
            <ContentImg src={props.path} />
            {props.name}
            <label onClick={e => e.stopPropagation()}>
                <CheckboxContainer>
                    <Icon viewBox="0 0 24 24">
                        <polyline points="19 7 10 17 5 12" />
                    </Icon>
                    <HiddenCheckbox id={"check"}ref={checkboxf} type={"checkbox"} onChange={e => onChange(e.target.checked, e.target, props.idx)} />
                </CheckboxContainer>
            </label>
        </ContentCard>
        </StyledLink>

    )
}
