
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../../index.css"

// React
import  React from 'react';

// Components
import HeaderComponent from "../../components/mobile/Header"
import FooterComponent from "../../components/mobile/Footer";

// Tailwind Classes

const Main = tw.div`mx-24 mt-32`;

const Page = tw.div`bg-black w-screen h-full bg-cover`;

const Content = tw.div`flex p-8 border-default bg-gray-800`;

const ContentLeft = tw.div`flex w-1/2 flex-col pr-8 border-r-default`;

const ContentRight = tw.div`flex w-1/2 flex-col pl-8`;

const ContentText = tw.p`text-white text-xl`;

const Footer = tw(FooterComponent)`bottom-0 absolute`;


const ContentLeftText = (
  <div>
    Hello and thanks for stopping by.
    <br/>
    <br/>
    Some content you're likely to find on this site:
    <br/>
    <br/>
    1. Past software and hardware projects<br/>
    2. Current learning endeavours<br/>
    3. Random pieces of information that are seemingly without bearing or place<br/>
    4. Code samples or files detailing DIY projects I attempt<br/>
  </div>
);

const ContentRightText = (
  <div>
    Hello and thanks for stopping by.
    <br/>
    <br/>
    Some content you're likely to find on this site:
    <br/>
    <br/>
    1. Past software and hardware projects<br/>
    2. Current learning endeavours<br/>
    3. Random pieces of information that are seemingly without bearing or place<br/>
    4. Code samples or files detailing DIY projects I attempt<br/>
  </div>
);




const MobileHome = (() => {

  return (
    <Page>
      <HeaderComponent/>
      <Main>
          <Content>
            <ContentLeft>
              <ContentText>
                {ContentLeftText}
                </ContentText>
              </ContentLeft>
            <ContentRight>
              <ContentText>
                {ContentRightText}
              </ContentText>
            </ContentRight>
          </Content>
          </Main>
          <Footer/>
    </Page>
  );
});

export default MobileHome;