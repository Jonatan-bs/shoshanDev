import styled from "styled-components";
import marked from "marked";
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";
import {Container, Markdown, AspectRatio, Image, Heading, Text, Link, Center} from "./../partials"
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
    position: relative;
    align-items: center;
    // ${ ({bgImage}) => bgImage && "background-image: url(" + bgImage + ")"  };
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    padding: 10px;
`

const ImageAndText = styled.div`
    display:flex;
    &>:nth-child(1){
        width: 50%;
        padding-right: 25px;
        position: relative;
    }
    &>:nth-child(2){
        width: 50%;
        padding-left: 25px;
        position: relative;
    }
`

const DynamicContent = ({content}) => {
    
    return (
      content.map( (component,i) => {
        switch(component.__component){
            case("page-content.small-boxes"):
                return (
                <Container key={i} pb="2">
                    <SmallBoxes>
                        {component.smallBox.map( (box,i) => (
                            <SmallBox key={i} color={box.bgColor} bgImage={box.image && getStrapiMedia(box.image)}>
                                <Image src={getStrapiMedia(box.image)} layout="fill" objectFit="contain"/>
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
                        <Center>
                            <div style={{paddingBottom: "250px" ,"maxWidth": component.maxWidth || "initial", width: component.width || "100%"} }>
                                <Image 
                                    src={getStrapiMedia(component.image)} 
                                    height={component.image.height} 
                                    width={component.image.width}
                                    data-aos="fade-up"
                                    />
                            </div>
                        </Center>                    :
                    <Container key={i} pb="2">
                        <Center>
                            <div style={{paddingBottom: "250px" ,"maxWidth": component.maxWidth || "initial", width: component.width || "100%"} }>
                                <Image 
                                    src={getStrapiMedia(component.image)} 
                                    height={component.image.height} 
                                    width={component.image.width}
                                    data-aos="fade-up"
                                    />
                            </div>
                        </Center>
                    </Container>
                    )
                break
            case("page-content.heading"):
                return <Container key={i} pb="1"><Heading align={component.align} as={component.tag || "h2"} size={component.size || "md"}>{component.heading}</Heading></Container>
                break
            case("page-content.text"):
                return (
                    <Container key={i} pb="1">
                        <Markdown>{component.content}</Markdown>
                    </Container>
                )
                break
            case("page-content.image-and-text"):
                return (
                    <Container key={i} pb="2">
                        <ImageAndText> 
                        {component.imageRight?
                                (<>
                                    <Markdown>{component.text}</Markdown>
                                    <div height={component.image.height} width={component.image.width}>
                                        <Image layout="fill" objectFit="cover" src={getStrapiMedia(component.image)}/>
                                    </div>
                                </>)
                                :
                                (<>
                                    <div height={component.image.height} width={component.image.width}>
                                        <Image layout="fill" objectFit="cover" src={getStrapiMedia(component.image)}/>
                                    </div>                                    <Markdown>{component.text}</Markdown>
                                </>)
                            }
                        </ImageAndText>
                    </Container>
                )
                break

        }  
    }) 
)}

export default DynamicContent; 