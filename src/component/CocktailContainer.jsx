import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled';
import ContentCard from '../component/ContentCard';

const Container = styled.div`
    margin-top: 20px;
`;

export default function CocktailContainer(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        if(props.ingredient != undefined) {
            const post = {
                i_idx: props.ingredient,
            };
            fetch('/ingdesccocktail', {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(post),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
    
                    setList(data);
                })
                .catch((error) => console.log(error));
        }
        

    }, [])

    function contentRender() {
        const arr = [];

        for(let el of list) {
            arr.push(<ContentCard path={"image/cocktail/" + el.c_img} name={el.c_name} type={"cocktail"} idx={el.c_idx}/>)
        }

        return arr;
    }
    return <>
        <Container>
            {contentRender()}
        </Container>

    </>
}
