import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import styled from "styled-components";
import "tailwindcss/dist/base.css";
import "../index.css"
import CoffeeIcon from "../images/LogoSvg";
import GitHub from "../images/GitHub";
import WwwComponent from "./accessory/WwwComponent";

const FooterDiv = tw.div`align-middle bottom-0 absolute inline-flex bg-gray-900  py-8 flex w-full px-24 justify-between absolute mb-0 mt-16`;

const RightText = tw.h2`text-white flex inline text-right`;

const SocialIcons = tw.span`text-white flex align-middle inline-flex text-center`;

const LeftText = tw.h2`text-white flex inline text-left justify-start align-middle`;

const GHIcon = tw(GitHub)`hover:text-purple-500 fill-current hover:transition-all hover:duration-200`;

const Coffee = tw(CoffeeIcon)`inline mr-4`;

const Icon = tw.span`mx-2`;

const Spacer = tw.span`px-2`;

const socialIcons = [
    <WwwComponent website={"carspotter.ca"}/>,
    <WwwComponent website={"labelshame.ca"}/>,
    <WwwComponent website={"clearkard.co"}/>,
    <GHIcon onClick={(e) => {window.location.href="https://github.com/HudsonGraeme"}}/>,
];

const Footer = (() => {


    return(
        <FooterDiv>
            <LeftText>
            <Coffee width={24} height={24} fill={tw`text-black`}/>
             <SocialIcons>
                    {socialIcons.map((icon, index) => {
                        return <Icon key={index}>{icon}</Icon>
                    })}
            </SocialIcons>
            </LeftText>
            <RightText>
                © 2020-2021 <strong>Hudson Graeme</strong> <i>All Rights Reserved</i>
            </RightText>
        </FooterDiv>
    )
})

export default Footer;