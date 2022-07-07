import React from 'react'
import styled from '@emotion/styled';

const ContentCard = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: -1px;
    position: relative;
`;

const ContentTitle = styled.div`
    height: 70px;
    margin-top: 30px;
    font-size:18px;
`;

const ContentDesc = styled.p`
    margin: 0;
    font-size: 15px;
    color: #aaaaaa;
`;

const CheckboxContainer = styled.div`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 2px solid black;
    position: absolute;
    top: 35%;
    right: 30px;
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

    function onChange(data, e) {
        if (data) {
            e.target.parentNode.style.background = "rgb(33, 150, 243)";
            e.target.parentNode.style.border = "none";
        }else {
            e.target.parentNode.style.background = "#ffffff";
            e.target.parentNode.style.border = "2px solid black";
        }
    }

    return (
        <ContentCard>
            <ContentTitle>Ignore garnish<ContentDesc>All cocktail garnishes are optional</ContentDesc></ContentTitle>
            
        <label>
            <CheckboxContainer>
                <Icon viewBox="0 0 24 24">
                    <polyline points="19 7 10 17 5 12" />
                </Icon>
                <HiddenCheckbox type={"checkbox"} onChange={e => onChange(e.target.checked, e)} />
            </CheckboxContainer>
        </label>
        </ContentCard>

    )
}
