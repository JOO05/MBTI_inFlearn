import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate=useNavigate();

  return(
    <Wrapper>
      <Header>MBTI 테스트</Header>
        <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img src={ResultData[0].image} alt='mbti' width={350} />
        </LogoImage>
        <Desc>당신과 제일 잘 맞는 MBTI는 {ResultData[0].name}입니다.</Desc>
        <Button style={{fontFamily: "DNFBitBitTTF"}} onClick={()=>navigate("/")}>
          테스트 다시하기
        </Button>
      </Contents>
    </Wrapper>
  )
}

export default Result;

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