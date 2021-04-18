import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../index.css"

import chevronRight from "../images/ChevronRight"

const Base = tw.div`flex flex-row text-white pr-0 my-8 border-default w-full bg-gray-800`;

const Column = tw.div`flex flex-col`

const IconColumn = tw(Column)`p-4`;

const TextColumn = tw(Column)`p-8 w-full`

const Title = tw.h1`text-2xl mb-2 font-medium pb-2 border-b-2 flex-row`;

const Date = tw.h1`inline font-light text-xl`;

const Description = tw.div`text-xl flex-wrap`;

const ChevronColumn = tw(Column)`
flex-grow-default w-32 text-left ml-2 
hover:bg-gray-700 hover:cursor-pointer`;

const Chevron = tw(chevronRight)`rounded-full p-2 m-auto w-12 h-12 `;

const PostItem = (props) => {


    const post = props.post;
    const ContentImage = tw(post.icon)`h-full w-24`;

    return(
        <Base>
        <IconColumn>
            <ContentImage/>
        </IconColumn>
        <TextColumn>
            <Title>
                {post.title}
            </Title>
            <Date>
                {post.date}
            </Date>
            <Description>
                {post.shortDescription}
            </Description>
        </TextColumn>
        <ChevronColumn onClick={(ev) => {window.location.href=post.slug}}>
            <Chevron/>
        </ChevronColumn>
        </Base>
    );

};

export default PostItem;