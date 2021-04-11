import styled from "styled-components";
import marked from "marked";
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";
import {Container, AspectRatio, Image, Heading, Text, Link, Center} from "./../partials"
import HeaderLogo from "./../partials/HeaderLogo"
import Banner from "./../page/Banner"


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

const DynamicContent = ({content}) => (
      content.map( (component,i) => {
        switch(component.__component){
            case("page-content.small-boxes"):
                return (
                <Container key={i} pb="2">
                    <SmallBoxes>
                        {component.smallBox.map( (box,i) => (
                            <SmallBox key={i} color={box.bgColor} bgImage={box.image && getStrapiMedia(box.image)}>
                                { box.title && !box.image && <Text bold size="md">{box.title}</Text> }
                            </SmallBox>
                        ))}
                    </SmallBoxes>
                </Container>
                )
                break
            case("page-content.banner"):
                return <Container key={i} pb="2"><Banner src={getStrapiMedia(component.image)}/></Container>
                break
            case("page-content.image"):
                return (
                    component.wide ?
                    <Center key={i}><img data-aos="fade-up" style={{paddingBottom: "250px" ,"maxWidth": component.maxWidth || "initial", width: component.width || "100%"} } src={getStrapiMedia(component.image)}/></Center>
                    :
                    <Container key={i} pb="2">
                        <Center><img data-aos="fade-up" style={{paddingBottom: "250px" ,"maxWidth": component.maxWidth || "initial", width: component.width || "100%"} } src={getStrapiMedia(component.image)}/></Center>
                    </Container>
                    )
                break
            case("page-content.heading"):
                return <Container key={i} pb="1"><Heading align={component.align} as={component.tag || "h2"} size={component.size || "md"}>{component.heading}</Heading></Container>
                break
            case("page-content.text"):
                return (
                    <Container key={i} pb="1" maxWidth="md">
                        <div dangerouslySetInnerHTML={ {__html: marked(component.content)}}></div>
                    </Container>
                )
                break
            case("page-content.image-and-text"):
                return (
                    <Container key={i} pb="2">
                        <ImageAndText> 
                        {component.imageRight?
                                (<>
                                    <Text dangerouslySetInnerHTML={ {__html: marked(component.text)}}></Text>
                                    <img src={getStrapiMedia(component.image)}/>
                                </>)
                                :
                                (<>
                                    <img src={getStrapiMedia(component.image)}/>
                                    <Text dangerouslySetInnerHTML={ {__html: marked(component.text)}}></Text>
                                </>)
                            }
                        </ImageAndText>
                    </Container>
                )
                break

        }  
    }) 
)

export default DynamicContent; 