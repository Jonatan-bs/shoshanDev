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
        { project.content && project.content.map( (content) => {
            console.log(content.image)
            switch(content.__component){
                case("page-content.heading"):
                    return <Heading as="h2" center size="lg" pb="2">{content.heading}</Heading>;
                    break
                case("page-content.image"):
                    return <Center><img data-aos="fade-up" style={{paddingBottom: "250px" ,"maxWidth": content.maxWidth || "initial", width: content.width || "100%"} } src={getStrapiMedia(content.image)}/></Center>
                    break
                case("page-content.text"):
                    return <Text data-aos="fade-up">{content.text}</Text>
                    break
            }  
        })}
        

    </>
)
export default Content 