
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../../index.css"

// Images

// React
import React from 'react';

import posts from "../../data/Posts";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const TextView = tw.div`mx-96 text-white h-full mt-12 pb-12 bg-gray-800 border-white border-default`; 

const Title = tw.h1`font-bold text-4xl text-white text-center py-8 mx-auto border-b-2`;
const InnerText = tw.p`text-white whitespace-pre-wrap mx-8`;


const Page = tw.div`bg-black w-screen py-12 bg-cover`;

const PopulistPage = (props) => {
    return (
        <>
        <Header/>
        <Page>
            <TextView>
                <Title>{posts["populist"].content}</Title>
                <InnerText>
                {posts["populist"].content}
                </InnerText>
            </TextView>
        </Page>

        <Footer/>

</>
    )
}
export default PopulistPage;