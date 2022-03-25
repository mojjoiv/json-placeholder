import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// Components

import Posts from '../Posts';


export default function Header() {
  

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
     <div>
          <Posts/>
          <HeaderP className="font13 semiBold">
           
          </HeaderP>
          
        </div>
      <LeftSide className="flexCenter">
       
       
      </LeftSide>
      <br/>
    
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

