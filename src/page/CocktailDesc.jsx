import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import Header from '../component/Header';
import IngredientsContainer from '../component/IngredientsContainer';

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
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
    letter-spacing: -1px;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 5px;
`;



export default function CocktailDesc(props) {
    const idx = window.location.search.replace("?c_idx=", '');
    const [cocktail, setCocktail] = useState({
        "c_idx": "",
        "c_name": "",
        "c_desc": "",
        "c_recipe": "",
        "c_img": "",
        "c_ing1": "",
        "c_ing2": "",
        "c_ing3": "",
        "c_ing4": "",
        "c_ing5": "",
        "c_ing6": "",
        "c_ing7": "",
        "c_ing8": "",
        "c_ing9": "",
        "c_ing10": "",
        "c_gar1": "",
        "c_gar2": "",
        "c_gar3": "",
        "c_measure1": "",
        "c_measure2": "",
        "c_measure3": "",
        "c_measure4": "",
        "c_measure5": "",
        "c_measure6": "",
        "c_measure7": "",
        "c_measure8": "",
        "c_measure9": "",
        "c_measure10": "",
        "c_meaGar1": "",
        "c_meaGar2": "",
        "c_meaGar3": "",
    });

    useEffect(() => {
        const post = {
            c_idx: idx,
        };
        fetch('/cockdesc', {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((json) => {
                //console.log(json)
                setCocktail(json);
            });
        //console.log(cocktail.c_ing1)
    }, [])


    function contentRender() {
        console.log(cocktail+"cocktail")
        const arr = [];
        const recipe = cocktail.c_recipe.split('/');
        let result = "";
        for(let i=0; i<recipe.length; i++) {
            result = result + `${i+1}. ${recipe[i]}\n`;
        }
        // console.log(cocktail.c_recipe.replaceAll('/','\n'))
        arr.push(<Base key={cocktail.c_idx}>
            <Title>{cocktail.c_name}</Title>
            <ImgContainer>
                <Img src={"image/cocktail/" + cocktail.c_img} />
            </ImgContainer>
            <Desc>{cocktail.c_desc}</Desc>
            <Recipe>{result}</Recipe>
            <IngredientsContainer cocktail={cocktail} />
        </Base>)



        return arr;
    }





    return <>
        <Header/>
        {contentRender()}
    </>
}
