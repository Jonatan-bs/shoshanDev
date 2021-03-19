import styled from "styled-components";
import {Container, Text, Grid, Span, Center, Heading} from "./../partials";
import {InfoBox} from "./partials/InfoBox"
import { getStrapiMedia, fetchAPI } from "../../lib/api";

const Info = styled.div`
    padding: 50px;
    background: ${({theme}) => theme.colors.light2}
`

const Products = styled.img.attrs({src: "/images/projects/greeny/products.png"})`
    max-width: 1000px;
    width: 80%;   
`
const Mobile = styled.img.attrs({src: "/images/projects/greeny/mobile.png"})`
`
const Computer = styled.img.attrs({src: "/images/projects/greeny/computer.png"})`  
`
const Content = ({project}) => (
    <>
        <Container py="3"> 
                <Grid cols={["65%","35%"]}>
                    <Text size="md" pr="1" lh="1.6" data-aos="fade-right">
                        {project.text}
                    </Text>
                    
                    <InfoBox entries={project.info}/>
                </Grid>
        </Container>
        {project.content.map( ({image, title, text, maxWidth, width}) => (
            <>
                {title && <Heading as="h2" center size="lg" pt="5" pb="3">{title}</Heading>} 
                {image && <Center><img data-aos="fade-up" style={{"maxWidth": maxWidth || "initial", width: width || "100%"} } src={getStrapiMedia(image)}/></Center>}
                {text && <p data-aos="fade-up">{text}</p>}
            </>
         ) )}
        {/* <Computer data-aos="fade-up"/>
        <Heading as="h2" center size="lg" pt="5">MobileFirst Design</Heading>
        <Mobile data-aos="fade-up"/>
        <Heading as="h2" center size="lg" pt="5" pb="3">Product Visuals</Heading>
        <Center>
            <Products data-aos="fade-up"/>
        </Center> */}
    </>
)
export default Content 