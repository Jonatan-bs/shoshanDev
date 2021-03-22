import styled from "styled-components";
import Layout from './../components/Layout';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../lib/api";
import {Container, AspectRatio, Image, Heading, Text, Link, Center} from "./../components/partials"
import HeaderLogo from "./../components/partials/HeaderLogo"
import DynamicContent from "./../components/partials/DynamicContent"
import Banner from "./../components/page/Banner"

const SmallBoxes = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;

`
const SmallBox = styled.div`
    width: 33.3%;
    height: 200px;
    ${({color})=> color && "background-color:" + color};
    color: #fff;
    justify-content: center;
    display: flex;
    align-items: center;
    ${ ({bgImage}) => bgImage && "background-image: url(" + bgImage + ")"  };
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    padding: 10px;
`
const SmallBoxImage = styled.img`
    width: 100%;
    padding: 10px;
`
const ImageAndText = styled.div`
    display:flex;
    &>:nth-child(1){
        width: 50%;
        padding-right: 25px;
    }
    &>:nth-child(2){
        width: 50%;
        padding-left: 25px;
    }
`

const Page = ({page}) => (
        <>  
                <HeaderLogo/>
                <DynamicContent content={page.content}/>
        </>
)

export default Page;

Page.getInitialProps = async (ctx) => {
    const {slug} = ctx.query
    let page = await fetchAPI('/pages?slug=' + slug)
    return page.error? {page: {}} : {page: page[0]}     
}