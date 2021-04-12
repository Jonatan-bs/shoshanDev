import styled from "styled-components";
import Layout from './../components/Layout';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../lib/api";
import {Container, AspectRatio, Image, Heading, Text, Link, Center} from "./../components/partials"
import HeaderLogo from "./../components/partials/HeaderLogo"
import DynamicContent from "./../components/partials/DynamicContent"
import Banner from "./../components/page/Banner"
import {useRouter} from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'

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

const Page = ({page}) => {

    // console.log("-__----------_______---")
    // console.log(page.content[1].text? "ja" : "no")
    
    const router = useRouter()

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
    if( !page || page.error) {
        return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
            </Head>
            <DefaultErrorPage statusCode={404} />
        </>
        )
    }
    
    return (
        <>  
                <HeaderLogo/>
                <DynamicContent content={page.content || {}}/>
        </> 
    )
}

export default Page;

export async function getStaticProps({params}){
    const {slug} = params
    let page = await fetchAPI('/pages?slug=' + slug)
    
    page = page.error || page[0]
    return {
        props: {
            page
        }
    }    
}

export async function getStaticPaths() {
    let pages = await fetchAPI('/pages')

    return {
      paths: pages?.map((page) => `/${page.slug}`) || [],
      fallback: true,
    }
  }