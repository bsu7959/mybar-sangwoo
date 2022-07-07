import React from 'react'
import styled from '@emotion/styled';
import Header from '../component/Header';
import SettingCard from '../component/SettingCard';

const Base = styled.div`
    margin: 0 20px;
`;





export default function Setting() {

    return <>
        <Header nav={"setting"} />
        <Base>
            <SettingCard></SettingCard>
        </Base>

    </>
}
