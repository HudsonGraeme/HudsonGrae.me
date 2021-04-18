import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";
import "tailwindcss/dist/base.css";
import "../../index.css"
import  React from 'react';


const PostIcon = (props) => {
    const icon = props.icon;

    const IconImage = tw(icon)`w-12 h-full my-auto mx-4`;

    return(
        <>
        <IconImage/>
        </>
    )

}


export default PostIcon;