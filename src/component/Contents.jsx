import React, { useEffect, useState, useCallback } from 'react'
import styled from '@emotion/styled';
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
    const [prevPage, setPrevPage] = useState(1);
    const [mylist, setMylist] = useState(null);
    const [clist, setClist] = useState(null);


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
        switch(props.menu) {
            case 0:
                mycocktail();
                break;
            case 1:
                callAll();
                break;
            default:
                break;
        }

    }, [props.menu]);



    function callAll() {
        console.log("callAll");
        fetch("http://localhost:80/all", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setClist(json);
                
            });
    }

    function mycocktail() {
        const ing = props.ings;
        const post = {
            list: ing,
        }
        fetch("http://localhost:80/mycocktail", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((json) => {
                setMylist(json);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {

    }, [])
    function contentRender() {

        const arr = [];
        for (let i = 0; i < props.nav.length; i++) {
            let left = i * 100;
            let page = props.nav[i];
            switch (page) {
                case "My cocktails":
                    console.log(mylist+"mylist")
                    if(mylist == null) {

                    }
                    if(mylist != null) {
                        arr.push(<Content style={{ left: left + "%" }} key={i}>
                        {
                            mylist.map(function (drink) {
                                return <ContentCard key={drink.c_idx} idx={drink.c_idx} type={"cocktail"} path={"image/cocktail/" + drink.c_img} name={drink.c_name} menu={props.menu} list={mylist} clist={props.clist} />;
                            })
                        }
                    </Content>)
                    }

                    break;
                case "All cocktails":
                    if(!clist) {
                        
                    }
                    if(clist) {
                        arr.push(<Content style={{ left: left + "%" }} key={i}>
                        {
                            clist.map(function (drink) {
                                return <ContentCard key={drink.c_idx} idx={drink.c_idx} type={"cocktail"} path={"image/cocktail/" + drink.c_img} name={drink.c_name} menu={props.menu} />;
                            })
                        }
                    </Content>)
                    }

                    break;
                // case "Favorite cocktails":
                //     arr.push(<Content style={{ left: left + "%" }} key={i}>
                //         <ContentCard path={"image/cocktail/"} name={"151515"} menu={props.menu} />;
                //     </Content>)
                //     break;
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
