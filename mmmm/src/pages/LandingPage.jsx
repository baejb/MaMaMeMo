import React from 'react';
import styled from 'styled-components';
import logo from '../image/mmmmlogo.png';
const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #dfccfb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const LogoImg = styled.img`
    width: 600px;
    height: 200px;

`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20%;
    padding: 10px;
`
const Button = styled.button`
    width: 20%;
    height: 50px;
    background-color: white;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid #BEADFA;
    margin:20px;
    box-shadow: 2px 4px 4px #BEADFE;
    transform-y: 3 ;
    &:active{
        margin-right: 2px;
        margin-bottom: 4px;
        box-shadow: none;
    }
`

const MainPage = () => {
    return (
        <MainDiv>
            <LogoImg src={logo}/>
            <ButtonDiv>
                <Button>로그인</Button>
                <Button>회원가입</Button>
            </ButtonDiv>
        </MainDiv>
    );
};

export default MainPage;