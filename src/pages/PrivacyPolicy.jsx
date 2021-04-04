
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

const TextView = tw.div`mx-96 text-white h-full mt-12 pb-12 bg-gray-800 border-white border-default`; 

const Title = tw.h1`font-bold text-4xl text-white text-center py-8 mx-auto border-b-2`;
const InnerText = tw.p`text-white whitespace-pre-wrap mx-8`;


const Page = tw.div`bg-black w-screen py-12 bg-cover`;

const privacyText = `

Last updated 2021-04-04

HudsonGraeme (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application (the “Application”). Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application ("Populist") after the date such revised Privacy Policy is posted.

This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, including any in-game virtual items, which may also collect and use data about you. We are not responsible for any of the data collected by any such third party.

This Privacy Policy was created using Termly’s Privacy Policy Generator.

COLLECTION OF YOUR INFORMATION

We do not collect data from this application.

Personal Data

No personal data is disclosed from the application, however playlists created or updated through this application may appear to Spotify users if the playlist is public.

Derivative Data

No data regarding application status, logging or otherwise useful debugging data is transmitted from the device to our servers. 

Financial Data

No financial data is accessed at any time from this application.

Spotify Permissions

The Application may by default access your Spotify basic account information, including your playlists, favourite artists, user identification number, as well as other information that you choose to make public. To provide basic application features, the permission to edit public and private playlists must be granted through Spotify.

Mobile Device Access

We may request access or permission to certain features from your mobile device, including usage of your mobile device’s network interface. If you wish to change our access or permissions, you may do so in your device’s settings.

Third-Party Data

Information from Spotify is used to provide basic application functionality. This includes but is not limited to profile information, playlist information an top artist information.

USE OF YOUR INFORMATION

Information proceeding from a spotify authentication instance is stored securely on the device to allow for basic application functionality. Additionally, user preferences are stored locally on the device to allow for basic application functionality.

DISCLOSURE OF YOUR INFORMATION

Third-Party Service Providers

Information entered by the user is disclosed with Spotify as a means to provide services to the user such as playlist creation, authentication and search capabilites.

THIRD-PARTY WEBSITES

The Application may contain links to third-party websites and applications of interest, including Third-Party Service Providers, that are not affiliated with us. Once you have used these links to leave the Application, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Application.

SECURITY OF YOUR INFORMATION

We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.

POLICY FOR CHILDREN

We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.

CONTROLS FOR DO-NOT-TRACK FEATURES

Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.

OPTIONS REGARDING YOUR INFORMATION

Account Information

You may at any time uninstall the application which will remove all locally stored account information from the device and from the application.

CALIFORNIA PRIVACY RIGHTS

No user data exists that is accessible by us. As a result, we are not able to remove personal data from any of our services. If you have a concern regarding privacy in this application, please contact us using the information found below.

CONTACT US

If you have questions or comments about this Privacy Policy, please contact us at:

HudsonGraeme

spencer@carspotter.ca`;


const Posts = (() => {

    return(
        <>
        <Header/>
        <Page>
            <TextView>            
                <Title>Privacy Policy</Title>
                <InnerText>
                {privacyText}
                </InnerText>
            </TextView>
        </Page>

        <Footer/>

</>
        )
    });

export default Posts;