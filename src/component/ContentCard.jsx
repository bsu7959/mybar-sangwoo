import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Content = styled.div`
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
    margin-left: 10px;
    margin-right: 10px;
    width: 70px;
    height: 70px;
`;

const Amount = styled.p`
    position: absolute;
    right: 10px;
`;

export default function ContentCard(props) {
    let url = "";
    switch(props.type) {
        case "ingredient":
            url = `/ingdesc?i_idx=${props.idx}`
            break;
        case "cocktail":
            url = `/cocktaildesc?c_idx=${props.idx}`
            break;
        default:
            break;
    }
    return (
        <StyledLink to={url} >
            <Content style={props.style ? props.style : null}>
                <ContentImg src={props.path} />
                {props.name}
                {props.amount ? <Amount>{props.amount}</Amount> : ""}
            </Content>
            </StyledLink>
    )
}
