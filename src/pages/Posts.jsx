
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../index.css"

import posts from "../data/Posts"
import PostItem from "../components/PostItem";

// React
import React from 'react';

// Tailwind Classes

const Page = tw.div`bg-black flex-col flex w-screen h-screen bg-cover`;

const Body = tw.div`mx-24 my-6 flex-grow-default`;

const PageTitle = tw.h2`text-2xl bg-gray-800 pl-4 border-b-default border-gray-200! py-4 pt-6 text-white`;

const Posts = (() => (
        <Page>
            <Body>
                <PageTitle>
                    Recent Posts
                </PageTitle>
              {Object.keys(posts).map((e,i) => {
                  return(<PostItem key={i} post={posts[e]}/>)
              })}
            </Body>
        </Page>
        )
    );

export default Posts;