import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import CheckboxContentCard from './CheckboxContentCard';
import ContentCard from './ContentCard';

const Base = styled.div`
    position: relative;
    width: 100%;
    margin: 0 3px;
    margin-top: 5px;
`;

const Content = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export default function Contents(props) {
    const [ilist, setIlist] = useState(null);
    const [prevPage, setPrevPage] = useState(1);

    useEffect(() => {
        const base = document.getElementById("base");
        base.animate(
            {
                transform: [
                    `translateX(-${prevPage}00%)`,
                    `translateX(-${props.menu}00%)`
                ]
            },
            {
                duration: 300,
                fill: 'forwards',
                easing: 'ease'
            }
        );
        setPrevPage(props.menu);
    }, [props.menu]);


    useEffect(() => {
        fetch("/alling", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setIlist(json);
            });
    }, [])
    function myinglist() {

    }
    function contentRender() {
        const arr = [];
        for (let i = 0; i < props.nav.length; i++) {
            let left = i * 100;
            let page = props.nav[i];
            switch (page) {
                case "My bar shelf":
                    if(ilist) {
                        if(prevPage == 0) {
                            arr.push(<Content style={{ left: left + "%" }} key={i}>
                        {
                            ilist.map(function (ingredient) {
                                for(let el of props.ingList) {
                                    if(el == ingredient.i_idx) {
                                        return <ContentCard key={ingredient.i_idx} idx={ingredient.i_idx} type={"ingredient"} path={"image/ingredients/" + ingredient.i_img} name={ingredient.i_name} ingList={props.ingList} setIngList={props.setIngList}/>;
                                    }
                                }
                                return <ContentCard key={ingredient.i_idx} idx={ingredient.i_idx} type={"ingredient"} path={"image/ingredients/" + ingredient.i_img} name={ingredient.i_name} ingList={props.ingList} setIngList={props.setIngList}  style={{ display: "none" }} />;
                            })
                        }
                    </Content>)
                        }
                        
                    }
                    break;
                case "Manage bar shelf":
                    if (ilist) {
                        arr.push(<Content style={{ left: left + "%" }} key={i}>
                            {
                                ilist.map(function (ingredient) {
                                    return <CheckboxContentCard key={ingredient.i_idx} idx={ingredient.i_idx} type={"ingredient"} path={"image/ingredients/" + ingredient.i_img} name={ingredient.i_name} ingList={props.ingList} setIngList={props.setIngList}/>;
                                })
                            }
                        </Content>)
                    }
                    break;
                default:
                    break;
            }
        }
        return arr;
    }



    return <>
        <Base id={"base"}>
            {contentRender()}
        </Base>
    </>
}
