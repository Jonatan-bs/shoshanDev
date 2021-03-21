import styled from "styled-components";
import Layout from './../components/Layout';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../lib/api";
import {Container, AspectRatio, Image, Heading, Text, Link, Center} from "./../components/partials"
import HeaderLogo from "./../components/partials/headerLogo"
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

const Page = ({page}) => (
        <Layout>  
                <HeaderLogo/>
                { page.content && page.content.map( content => {
                    switch(content.__component){
                        case("page-content.smallBox"):
                            return 
                            (
                            <Container pb="2">
                                <SmallBoxes>
                                    {smallBox.map( box => (
                                        <SmallBox color={box.bgColor} bgImage={box.image && getStrapiMedia(box.image)}>
                                            { box.title && !box.image && <Text bold size="md">{box.title}</Text> }
                                        </SmallBox>
                                    ))}
                                </SmallBoxes>
                            </Container>
                            )
                            break
                        case("page-content.banner"):
                            return <Container pb="2"><Banner src={getStrapiMedia(content.image)}/></Container>
                            break
                        case("page-content.image"):
                            return <Container pb="2"><Center><img data-aos="fade-up" style={{paddingBottom: "250px" ,"maxWidth": content.maxWidth || "initial", width: content.width || "100%"} } src={getStrapiMedia(content.image)}/></Center></Container>
                            break
                        case("page-content.heading"):
                            return <Container pb="1"><Heading as={content.tag || "h2"} size={content.size || "md"}>{content.heading}</Heading></Container>
                            break

                    }  
                })}
        </Layout>
)

export default Page;

Page.getInitialProps = async (ctx) => {
    const {slug} = ctx.query
    let page = await fetchAPI('/pages?slug=' + slug)
    return page.error? {page: {}} : {page: page[0]}     
}