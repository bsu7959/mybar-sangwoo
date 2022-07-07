import React, { useEffect } from 'react'
import styled from '@emotion/styled';

const Base = styled.div`
  width: 100%;
  height: 45px;
  background-color: rgb(33, 150, 243);
  box-shadow: 0 2px 2px 0 #c0c0c0;
  display: flex;
  text-align: center;
  justify-content: space-between;
  position: relative;
`;

const Content = styled.div`
  height: 45px;
  color: #ffffff;
  line-height: 45px;
  font-size: 15px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

const Bar = styled.div`
  height: 2px;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export default function Nav(props) {
  const width = 100 / props.value.nav.length;

  useEffect(() => {
    onChanged(1);
  },[])

  const onChanged = (data) => {
    props.value.setMenu(data);
    const bars = document.getElementById("bars");
    bars.animate(
      {
        transform: [
          `translateX(${props.value.menu}00%)`,
          `translateX(${data}00%)`
        ]
      },
      {
        duration: 300,
        fill: 'forwards',
        easing: 'ease'
      }
    );

  }

  return (
    <Base>
      {props.value.nav.map((val, index) => (
        <Content key={index} style={{ width: `${width}%` }} onClick={() => onChanged(index)}>{val}</Content>
      ))}
      <Bar style={{ width: `${width}%`}} id={"bars"} />
    </Base>
  )
}
