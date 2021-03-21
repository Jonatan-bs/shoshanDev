import styled from "styled-components";
import Layout from './../components/Layout';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../lib/api";
import {Container, AspectRatio, Image, Heading, Text, Link} from "./../components/partials"
import HeaderLogo from "./../components/partials/headerLogo"

const Banner = styled.div`
    width: 100%;
    height: 500px;
    background: url(${ ({src}) => src });
    background-size: cover;
    background-position: center center;
    margin:  0;
`
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
            <Container>
                <HeaderLogo/>
                { page.banner && <Banner src={getStrapiMedia(page.banner)}></Banner>}
                { page.title && <Heading size="xl" py="1">{page.title}</Heading>}
                { page.text && <Text size="md" pb="1">
                    {page.text}
                </Text>}
                { page.content && page.content.map( ({smallBox}) => {
                    if(smallBox){
                        return(
                            <SmallBoxes>
                                {console.log(smallBox)}
                                {smallBox.map( box => (
                                    <SmallBox color={box.bgColor} bgImage={box.image && getStrapiMedia(box.image)}>
                                        {/* { box.image && <SmallBoxImage src={getStrapiMedia(box.image)}/> } */}
                                        { box.title && !box.image && <Text bold size="md">{box.title}</Text> }
                                    </SmallBox>
                                ))}
                            </SmallBoxes>
                        )
                    }
                    
                })}
            </Container>
        </Layout>
)

export default Page;

Page.getInitialProps = async (ctx) => {
    const {slug} = ctx.query
    let page = await fetchAPI('/pages?slug=' + slug)
    page = page[0]
    return {page} 
}