
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import styled from "styled-components";
import "tailwindcss/dist/base.css";
import "../index.css"

// Images

// React
import  React, {useState, useEffect} from 'react';

// Helpers
import { useLongPress } from "../helpers/LongPress";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Tailwind Classes

const Page = tw.div`bg-black w-screen h-screen bg-cover`;


const Posts = (() => {

    return(
        <Page>
            <Header/>
                Test
            <Footer/>
        </Page>
        )
    });

export default Posts;