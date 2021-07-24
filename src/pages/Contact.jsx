
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../index.css"

// Images

// React
import  React from 'react';

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Tailwind Classes
const TextView = tw.div`mx-96 text-white h-full mt-12 pb-12 bg-gray-800 border-white border-default`;
const Title = tw.h1`font-bold text-4xl text-white text-center py-8 mx-auto border-b-2`;
const InnerText = tw.p`text-white whitespace-pre-wrap mx-8 mt-4 text-center`;
const Page = tw.div`bg-black w-screen py-12 bg-cover`;
const InputField = tw.input`bg-gray-700 border-default flex inline-flex px-2 py-1 mx-2 outline-none`;
const Row = tw.div`mt-4 flex-row`;

const privacyText = `Test`;


const Posts = (() => {

    return(
        <>
        <Header/>
        <Page>
            <TextView>
                <Title>Contact</Title>
                <InnerText>
                <Row>
                    <InputField type="text" placeholder="First Name"/>
                    <InputField type="text" placeholder="Last Name"/>
                </Row>
                <Row>
                    <InputField type="text" placeholder="Email Address"/>
                </Row>
                </InnerText>
            </TextView>
        </Page>
        <Footer/>
        </>
    )
});

export default Posts;