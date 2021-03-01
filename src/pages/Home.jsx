
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import styled from "styled-components";
import "tailwindcss/dist/base.css";
import "../index.css"

// Images
import LogoSVG from "../images/LogoSvg";
import HeaderImage from "../images/HG.jpg";

// React
import  React, {useState, useEffect} from 'react';

// Helpers
import { useLongPress } from "../helpers/LongPress";

// Components
import Dash from "../components/DashComponent";

// Tailwind Classes
const HeaderLeft = tw.span`flex-row flex justify-between ml-8`;

const SpacerSm = tw.span`inline-flex w-10`;

const NameLabel = tw.h1`font-mono text-white text-4xl font-bold flex inline my-auto`;

const Spacer = tw.span`inline-flex w-full`;

const Header = tw.header`flex px-6 pt-4 pb-2 border-b-2 border-gray-600`;

const Page = tw.div`bg-gray-900 w-screen h-screen bg-cover`;

const NavLink = tw.a`text-white mx-8 text-xl my-auto text-center flex flex-nowrap whitespace-nowrap w-max duration-500 transition-all
hocus:border-b-default hocus:border-white
`;

const Content = tw.div`flex mx-24 p-8 border-default`;

const ContentLeft = tw.div`flex flex-col pr-8 border-r-default`;

const ContentRight = tw.div`flex flex-col pl-8`;

const ContentText = tw.p`text-white text-xl`;

const CenterImage = tw.img`w-1/3 mx-auto py-10 justify-center text-center`;

// Static Props
// TODO: Load from JSON
const navLinks = [
  {
    label:'Profile',
    location: 'profile',
  },
  {
    label: "Past Works",
    location: "projects",
  },
  {
    label: "Contact",
    location: "contact"
  },
  {
    label: "Posts",
    location: "posts"
  }
];

const ContentLeftText = (<div>
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

</div>);

const ContentRightText = (<div>

  
  </div>);




function App({
  NavLinks = navLinks
}
) {


  

  return (
    <Page>
      <Header className="App-header">
        <HeaderLeft>
        <LogoSVG css={tw`my-auto`} width="3em"/>
        <SpacerSm/>
        <NameLabel>HudsonGraeme<Dash/></NameLabel>
        </HeaderLeft>
        <Spacer/>
        {NavLinks.map((link, index) => (
            <NavLink href={link.location} key={index}>{link.label}</NavLink>
        ))}
      </Header>
      <CenterImage src={HeaderImage}/>
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
    </Page>
  );
}

export default App;