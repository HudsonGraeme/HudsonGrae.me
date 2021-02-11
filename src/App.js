import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import styled from "styled-components";
import LogoSVG from "./images/LogoSvg";
import "tailwindcss/dist/base.css";


const NameLabel = tw.h1`ml-10 font-mono text-white text-4xl font-bold flex inline my-auto`;

const Dash = tw.span`animate-wiggle`; // This doesn't work for some inexplicable reason

const Spacer = tw.span`inline-flex w-full`;

const Header = tw.header`flex px-6 pt-4 pb-2 border-b-2 border-gray-600`;

const Page = tw.div`bg-gray-900 w-screen h-screen bg-cover`;

const NavLink = tw.a`text-white mx-8 text-xl my-auto text-center flex flex-nowrap whitespace-nowrap w-max duration-500 transition-all
hocus:border-b-default hocus:border-white
`;

const Content = tw.div`flex m-24 p-8 border-default`;

const Left = tw.div`flex flex-col pr-8 border-r-default`;

const Right = tw.div`flex flex-col pl-8`;

const ContentText = tw.p`text-white text-xl`;


const InformationText = <div>
Hello and thanks for stopping by.
<br/>
<br/>
Some things that I enjoy:
<br/>
1. Designing and developing minimalistic software that assists in every day activities<br/>
2. Designing graphics and editing video<br/>
3. Composing music<br/>
4. Building software interfaces for physical hardware<br/>

</div>;

function App({
  NavLinks = [
    {
      label:'Profile',
      location: '/profile',
    },
    {
      label: "Past Works",
      location: "/projects",
    },
    {
      label: "Contact",
      location: "/contact"
    },
  ]}
) {
  return (
    <Page>
      <Header className="App-header">
        <LogoSVG css={tw`my-auto`} width="90px" height="90px"/>
        <NameLabel>HudsonGraeme<Dash>_</Dash></NameLabel>
        <Spacer/>
        {NavLinks.map((link, index) => (
            <NavLink href={link.location}>{link.label}</NavLink>
        ))}
      </Header>
          <Content>
            <Left><ContentText>{InformationText}</ContentText></Left>
            <Right><ContentText>{InformationText}</ContentText></Right>
          </Content>
    </Page>
  );
}

export default App;