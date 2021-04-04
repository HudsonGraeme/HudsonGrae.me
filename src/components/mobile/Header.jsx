import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import styled from "styled-components";
import "tailwindcss/dist/base.css";
import Dash from "../accessory/DashComponent";
import LogoSVG from "../../images/LogoSvg.jsx";
import LearningImg from "../../images/LearningBar.jsx";
import  React, {useState, useEffect} from 'react';
import {Modal} from 'react-modal';

import Sammich from "../../images/Sammich";

const Parent = tw.header`bg-gray-900 w-full flex px-6 pt-4 pb-2 border-b-2 border-gray-600`;

const HeaderLeft = tw.span`flex-row hover:cursor-pointer flex justify-between ml-1`;

const SpacerSm = tw.span`inline-flex w-10`;

const Sandwhich = styled(Sammich)`
${tw`text-white w-48 align-middle my-auto transition-all duration-200`}
${(values) => values.menushown ? tw`transition-all duration-200 transform -rotate-90` : tw`` }
`;

const NameLabel = tw.h1`select-none font-mono text-white text-2xl font-bold flex inline my-auto`;

const Spacer = tw.span`inline-flex w-full`;

const NavList = tw.div`bg-gray-900 w-full flex-col mt-0 mb-4 py-4 transition-all duration-200`;

const NavLink = tw.a`select-none w-full text-white text-xl mx-auto bg-gray-900 text-center block py-1 whitespace-pre duration-500 transition-all
hocus:border-b-default hocus:border-white
`;

const Mid = tw.span`bg-gray-900 rounded-b-2xl px-4 py-3 flex flex-col justify-between align-middle`;

const LearningBar = tw(LearningImg)`w-full block my-auto`;

const ItalicText = tw.i`text-white block select-none mx-8 text-xs my-auto`;



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

  

const HeaderComponent = React.memo(({NavLinks = navLinks}) => {

    const [isShowingMenu, setShowingMenu] = useState(true);
    const [shouldHideElement, setShouldHideElement] = useState(false);

    useEffect(() => {
      if(isShowingMenu || !shouldHideElement) {
        return;
      }
      setTimeout(() => {
        console.log("Setting should hide element ", isShowingMenu, shouldHideElement);
          setShouldHideElement(true);
          setShouldHideElement(false);
      }, 200)
    }, [shouldHideElement, isShowingMenu]);

    console.log("Is Showing Menu:: ",isShowingMenu);

    return(
        <>
      <Parent>
        <HeaderLeft onClick={(e) => {window.location.href="/"}}>
        <LogoSVG css={tw`my-auto`} width="3em"/>
        <SpacerSm/>
        <NameLabel>HudsonGraeme<Dash/></NameLabel>
        </HeaderLeft>
        <Spacer/>
        <Sandwhich menushown={isShowingMenu} onClick={(e) => setShowingMenu(!isShowingMenu)}/>
      </Parent>
         <Mid>
         <ItalicText>"Programming endeavours and much more fun when copious amounts of caffiene are involved"</ItalicText>
             <LearningBar/>
        </Mid>
        <Modal style={{ overlay: {
          background: "transparent",
          marginTop: "4rem",
          top: "0",
          position: "relative",
        }, content: {
          top: 'auto',
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          border: 'none',
          background: '#121212',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: 'none',
          outline: 'none',
          padding: 'none',
          width: '100%',
          display: 'flex-col',
          marginBottom:'4rem',
          transition: 'all',
          duration: 500,
        }}} isOpen={isShowingMenu} shouldhide={shouldHideElement}>
        {NavLinks.map((link, index) => (
            <NavLink href={link.location} key={index}>{link.label}</NavLink>
        ))}
        </Modal>
        </>
    )
});


export default HeaderComponent;