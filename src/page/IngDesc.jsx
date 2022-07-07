import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import Header from '../component/Header';
import CocktailContainer from '../component/CocktailContainer';

const Base = styled.div`
    margin: 0 20px;
`;

const Title = styled.h1`
    color: #646464;
    font-size: 55px;
    margin: 0;
    letter-spacing: 3px;
    font-weight: normal;
`;

const ImgContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    text-align: center;
`;

const Img = styled.img`
    height: 200px;
`;

const Desc = styled.p`
    letter-spacing: -0.5px;
    font-size: 15px;
`;

const Recipe = styled.pre`
    letter-spacing: -1px;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 5px;
`;



export default function CocktailDesc(props) {
    const idx = window.location.search.replace("?i_idx=", '');
    const [ingredient, setIngredient] = useState({

    });

    useEffect(() => {
        const post = {
            i_idx: idx,
        };
        fetch('/ingdesc', {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((json) => {
                //console.log(json)
                setIngredient(json);
            });
        //console.log(cocktail.c_ing1)
    }, [])


    function contentRender() {
        const arr = [];

        arr.push(<Base key={ingredient.i_idx}>
            <Title>{ingredient.i_name}</Title>
            <ImgContainer>
                <Img src={"image/ingredients/" + ingredient.i_img} />
            </ImgContainer>
            <Desc>{ingredient.i_desc}</Desc>
            <CocktailContainer ingredient={ingredient.i_idx} />
        </Base>)



        return arr;
    }





    return <>
        <Header />
        {contentRender()}
    </>
}
