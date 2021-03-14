
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import styled from "styled-components";
import "tailwindcss/dist/base.css";
import "../index.css"

// React
import  React, {useState, useEffect} from 'react';
import {isMobile, isDesktop, MobileView, BrowserView} from "react-device-detect";
// Helpers
import { useLongPress } from "../helpers/LongPress";

// Components
import HeaderComponent from "../components/Header"
import FooterComponent from "../components/Footer";
import MobilePage from "./mobile/Home";

// Tailwind Classes
const Main = tw.div`mx-24 mt-32`;

const Page = tw.div`bg-black w-screen h-screen bg-cover`;

const Content = tw.div`flex p-8 border-default bg-gray-800`;

const ContentLeft = tw.div`flex w-1/2 flex-col pr-8 border-r-default`;

const ContentRight = tw.div`flex w-1/2 flex-col pl-8`;

const ContentText = tw.div`text-white text-xl`;

const Footer = tw(FooterComponent)`bottom-0 absolute`;

// Static Props
// TODO: Load from JSON


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




const App = (() => {

  return (
    <div>
    <BrowserView>
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
    </BrowserView>
    <MobileView>
      <MobilePage/>
    </MobileView>
    </div>
  );
});

export default App;