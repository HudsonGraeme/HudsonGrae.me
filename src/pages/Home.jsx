
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../index.css"



import chevronRight from "../images/ChevronRight"

import posts from "../data/Posts"

// React
import  React from 'react';
import {MobileView, BrowserView} from "react-device-detect";

// Components

import PostIcon from "../components/accessory/PostIcon";
import MobilePage from "./mobile/Home";

// Tailwind Classes

const ContentViewChevron = tw(chevronRight)`text-white inline rounded-full px-2 w-12 h-full `;

const Main = tw.div`mx-24 flex-grow-default mt-32`;

const Page = tw.div`bg-black flex-col flex w-screen h-screen bg-cover`;

const Content = tw.div`flex p-8 border-default bg-gray-800`;

const ContentLeft = tw.div`flex w-1/2 flex-col pr-8 border-r-default`;

const ContentRight = tw.div`flex w-1/2 flex-col pl-8`;

const ContentText = tw.div`text-white flex flex-row text-xl`;

const RecentPost = tw.div`flex flex-row my-3`;

const PostTitle = tw.p`text-xl flex flex-col h-full my-auto`;

const PostSubtitle = tw.p`font-light flex flex-col text-lg h-full my-auto`;

const PostActionButton = tw.button`
border-white flex flex-col border-2 h-full my-auto mx-6
hover:bg-gray-700
`;

const SectionTitle = tw.h1`text-3xl mb-4 text-white`

//const Footer = tw(FooterComponent)`bottom-0 absolute`;

// Static Props
// TODO: Load from JSON


const FindOnThisSite = [
  "Past software and hardware projects",
  "Current learning endeavours",
  "Random pieces of information that are seemingly without bearing or place",
  "Code samples or files detailing DIY projects I attempt"
]

const ContentLeftText = (
  <>

    <SectionTitle>Hello and thanks for stopping by.</SectionTitle>
    <ContentText>Some content you're likely to find on this site:</ContentText>
    <br/>
    {FindOnThisSite.map((e, i) => {
      return <ContentText key={i}>{i+1}. {e}</ContentText>
    })}
  </>
);


const ContentRightText = (
  <>
    <SectionTitle>Recent Posts</SectionTitle>
    {Object.keys(posts).map((e, i) => {
      const post = posts[e];
      return(<><RecentPost key={i}>
        <PostIcon key={i+'i'}icon={post.icon}/>
        <PostTitle key={i+'e'}>{post.title}</PostTitle>
        &nbsp;
        <PostSubtitle key={i+'s'}>- {post.shortDescription}</PostSubtitle>
        <PostActionButton key={i+'a'} onClick={(ev) => {window.location.href="/posts/"+e}}>
          <ContentViewChevron key={i+'c'}/>
        </PostActionButton>
        </RecentPost></>)
    })}
  </>
);




const App = (() => {

  return (
    <>
    <BrowserView>
      <Page>
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
    </Page>
    </BrowserView>
    <MobileView>
      <MobilePage/>
    </MobileView>
    </>
  );
});

export default App;