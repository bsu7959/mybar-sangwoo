import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled';
import ContentCard from '../component/ContentCard';

const Container = styled.div`
    margin-top: 20px;
`;

export default function IngredientsContainer(props) {
    const [ingdata, setIngdata] = useState([]);
    const cocktail = props.cocktail;

    const ingname = [];
    const measure = [];
    const garnish = [];
    const garnishmea = [];
    Object.keys(cocktail).forEach(function(k){
        if(k.substring(2,5)=="ing") {
            if(cocktail[k]!="") {
                ingname.push(cocktail[k]);
            }
        }else if(k.substring(2,9)=="measure") {
                measure.push(cocktail[k]);
        }else if(k.substring(2,5) == "gar") {
            garnish.push(cocktail[k]);
        }else if(k.substring(2,8)=="meaGar") {
            garnishmea.push(cocktail[k]);
        }
    });
    useEffect(() => {
        const post = {
            c_idx: props.cocktail.c_idx,
        };
        fetch('/cockdescing', {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data)
                setIngdata(data);
            })
            .catch((error) => console.log(error));

    }, [])

    function contentRender() {
        const arr = [];
        if (ingdata.length == 0) return;
        for(let el of ingdata) {
            for(let i=0; i<ingname.length; i++) {
                if(el.i_name == ingname[i]) {
                    arr.push(<ContentCard path={"image/ingredients/" + el.i_img} name={el.i_name} amount={measure[i]} type={"ingredient"} idx={el.r_iidx} />)
                    break;
                }
            };
        }
        for(let el of ingdata) {
            for(let i=0; i<garnish.length; i++) {
                if(el.i_name == garnish[i]) {
                    arr.push(<ContentCard path={"image/ingredients/" + el.i_img} name={el.i_name + " " + garnishmea[i]} amount={""} type={"ingredient"} idx={el.r_iidx} />)
                    break;
                }
            };
        }
        

        return arr;
    }
    return <>
        <Container>
            {contentRender()}
        </Container>

    </>
}
