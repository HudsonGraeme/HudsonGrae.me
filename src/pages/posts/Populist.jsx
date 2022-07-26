
// Style
import { css } from "styled-components/macro"; //eslint-disable-line
import "tailwindcss/dist/base.css";
import "../../index.css"

// React
import React from 'react';

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PopulistPage = (props) => {
    return (
        <>
            <Header />
            # Test
        <Footer/>
        </>
    )
}
export default PopulistPage;