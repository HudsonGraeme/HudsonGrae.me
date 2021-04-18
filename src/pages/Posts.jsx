
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../index.css"

import posts from "../data/Posts"

import PostItem from "../components/PostItem";

// Images

// React
import React from 'react';


// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Tailwind Classes

const Page = tw.div`bg-black flex-col flex w-screen h-screen bg-cover`;

const Body = tw.div`mx-24 my-16 flex-grow-default`;

const PageTitle = tw.h2`text-4xl bg-gray-800 pt-4 pl-4 border-b-default border-gray-200! py-8 text-white`;



const Posts = (() => {

    return(
        <Page>
            <Header/>
            <Body>
                <PageTitle>
                    Recent Posts
                </PageTitle>
              {Object.keys(posts).map((e,i) => {
                  return(<PostItem key={i} post={posts[e]}/>)
              })}
            </Body>
            <Footer/>
        </Page>
        )
    });

export default Posts;