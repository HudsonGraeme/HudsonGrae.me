import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../../index.css"
import CoffeeIcon from "../../images/LogoSvg";
import GitHub from "../../images/GitHub";
import WwwComponent from "../accessory/WwwComponent";

const FooterDiv = tw.div`text-white bg-gray-900 py-8 flex w-full`;

const SocialIcons = tw.span`text-white block flex-col m-auto text-left whitespace-pre`;

const GHIcon = tw(GitHub)`hocus:text-purple-500 fill-current inline mx-3 align-bottom hocus:transition-all hocus:duration-200`;

const Coffee = tw(CoffeeIcon)`w-8 inline mx-3`;

const Icon = tw.div`my-0 my-1 whitespace-pre flex-row`;

const CenteredIcons = tw.div`text-center mx-auto align-bottom mb-3`;

const Copyright = tw.p`flex-col inline whitespace-pre text-center m-auto`;

const socialIcons = [
    <CenteredIcons><GHIcon onClick={(e) => {window.location.href="https://github.com/HudsonGraeme"}}/><Coffee/></CenteredIcons>,
    <WwwComponent website={"clearkard.co"}/>,
    <WwwComponent website={"carspotter.ca"}/>,
];

const Footer = (() => {


    return(
        <FooterDiv>
             <SocialIcons>
                    {socialIcons.map((icon, index) => {
                        return <><Icon key={index}>{icon}</Icon></>
                    })}
            </SocialIcons>
            <Copyright>
                {"© 2020-2021\n"}
                <strong>{"Hudson Graeme\n"}</strong> 
                <i>{"All Rights Reserved\n"}</i>
            </Copyright>
        </FooterDiv>
    )
})

export default Footer;