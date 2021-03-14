import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import styled from "styled-components";
import "tailwindcss/dist/base.css";
import Dash from "./accessory/DashComponent";
import LogoSVG from "../images/LogoSvg.jsx";
import LearningImg from "../images/LearningBar.jsx";

const Parent = tw.header`bg-gray-900 flex px-6 pt-4 pb-2 border-b-2 border-gray-600`;

const HeaderLeft = tw.span`flex-row hover:cursor-pointer flex justify-between ml-8`;

const SpacerSm = tw.span`inline-flex w-10`;

const NameLabel = tw.h1`select-none font-mono text-white text-4xl font-bold flex inline my-auto`;

const Spacer = tw.span`inline-flex w-full`;

const NavLink = tw.a`select-none text-white mx-8 text-xl my-auto text-center flex flex-nowrap whitespace-nowrap w-max duration-500 transition-all
hocus:border-b-default hocus:border-white
`;

const Mid = tw.span`bg-gray-900 rounded-b-3xl px-4 py-3 flex justify-between align-middle`;

const LearningBar = tw(LearningImg)`w-1/4 inline-block my-auto`;

const ItalicText = tw.i`text-white inline-block select-none mx-8 my-auto`;


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

const HeaderComponent = (({NavLinks = navLinks}) => {
    return(
        <div>
      <Parent>
        <HeaderLeft onClick={(e) => {window.location.href="/"}}>
        <LogoSVG css={tw`my-auto`} width="3em"/>
        <SpacerSm/>
        <NameLabel>HudsonGraeme<Dash/></NameLabel>
        </HeaderLeft>
        <Spacer/>
        {NavLinks.map((link, index) => (
            <NavLink href={link.location} key={index}>{link.label}</NavLink>
        ))}
      </Parent>
         <Mid>
             <LearningBar/>
              <ItalicText>"Programming endeavours and much more fun when copious amounts of caffiene are involved"</ItalicText>
        </Mid>
        </div>
    )
});


export default HeaderComponent;