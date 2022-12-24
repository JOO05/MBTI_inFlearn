import React from "react";
import styled from "styled-components";
import TitleImg from '../assets/Home.jpg'
// 이미지를 삽입하는 방법
import Button from 'react-bootstrap/Button';
//버튼을 사용하므로 별도로 Button styled.div 정의할 필요가 없음
import { useNavigate } from "react-router-dom";
//페이지 이동 기능을 구현

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('./question');
  }

  return(
    <Wrapper>
      <Header>심심할 때 해 보는 MBTI 테스트</Header>
        <Contents>
        <Title>나의 성격은?</Title>
        <LogoImage>
          <img src={TitleImg} alt='home' width={350} />
        </LogoImage>
        <Desc>나의 MBTI 찾기!</Desc>
        <Button style={{fontFamily: "DNFBitBitTTF"}} onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  height:100vh;   
  width:100%;
` // height:100vh;와 width:100%;로 전체 영역 지정

const Header = styled.div`
  font-size:40pt;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: "DNFBitBitTTF";
`

const Contents = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
` //flex-direction은 Contents 안의 요소를 세로로 정렬하게 해줌

const Title = styled.div`
  font-size:30pt;
  margin-top:40px;
  font-family: "DNFBitBitTTF";
`

const LogoImage = styled.div`
  margin-top:10px;
`

const Desc = styled.div`
  font-size:20pt;
  margin-top:20px;
  font-family: "DNFBitBitTTF";
`