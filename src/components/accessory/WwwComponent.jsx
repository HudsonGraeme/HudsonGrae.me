import  React, {useState, useEffect} from 'react';
import tw from "twin.macro";

export default React.memo(props => {
    const WwwWrapper = tw.button`
    pr-1 select-none border-default duration-200 transition-all outline-none align-middle overflow-hidden items-center justify-center content-center inline-flex border-white rounded-lg
    hocus:outline-none focus:bg-white 
    `;

    const WWW = tw.p`
    duration-200 transition-all px-1 bg-white text-sm h-full flex text-black font-black font-sans
    group-focus:bg-black group-focus:text-white
    `;

    const WebsiteText = tw.p`
    duration-200 transition-all pl-1 h-full text-sm h-full flex
    group-focus:font-medium group-focus:bg-white group-focus:text-black
    `;
  
    return (<WwwWrapper className="group" onClick={(e) => {window.open("https://"+props.website, "_blank")}}><WWW>www</WWW><WebsiteText>{props.website}</WebsiteText></WwwWrapper>);
  })