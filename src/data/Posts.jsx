import populistIcon from "../images/Populist";
import coffeeIcon from "../images/LogoSvg";

import populistPage from "../pages/posts/Populist";
import pastWorksPage from "../pages/posts/PastWorks";

const posts =
{
    "populist": {
        "title": "Populist",
        "slug": "populist",
        "date": "2021-04-18",
        "shortDescription": "Building a Spotify Playlist Utility for iOS",
        "content": "All about the content man",
        "icon": populistIcon,
        "page": populistPage
    },
    "past-works": {
        "title": "Past Works",
        "slug": "past-works",
        "date": "2021-04-15",
        "shortDescription":"Projects I've worked on from the past",
        "content": "Previous works",
        "icon": coffeeIcon,
        "page": pastWorksPage
    }
}

export default posts;
