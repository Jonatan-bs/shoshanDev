import styled from "styled-components";
import { Container, AspectRatio, Heading, Link }  from "./../partials";
import { getStrapiMedia, fetchAPI } from "../../lib/api";

const ContainerMod = styled(Container)`
    display: flex; 
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    background: linear-gradient(0deg , #000000e6, transparent);
`
const TextWrap = styled.div`
    position: absolute;
    left: 0;
    color: #fff;
    z-index: 1;
    padding: 50px;
    bottom: 0;
    &>ul li{
        display: inline;
    }
    &>ul li:not(:last-child):after{
        content: " | "
    }
`

const Title = styled(Heading)`
    color: #fff;
`

const AspectRatioMod = styled(AspectRatio)`
    &:after {
        content: "";
        border: 1px solid #fff;
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        transition: all .2s;
        opacity:0;
    }
    &:hover:after {
        content: "";
        border: 1px solid #fff;
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        opacity:1;
    }

    &:hover .textWrap{
        bottom: 20px;
        left: 20px;
        // transform: translateY(50%);
    }
    & .textWrap{
        transition: all .2s;
    }
`


const Projects = ({projects}) => (
    <ContainerMod pb="3" className="gap" data-aos="fade-up">
        {projects.map((project, i) => (
            <Link key={i}  width="calc(50% - 6px)" href={"/project/" + project.slug}>
                        <AspectRatioMod gradient size="cover" bgColor={project.bgColor || "#333"} src={getStrapiMedia(project.thumbnail)} pct="80">
                            <TextWrap className="textWrap">
                                <Title as="p" size="lg">{project.title}</Title>
                                <ul>
                                    { project.subtitle.map( ({element}, i) => (
                                        <li key={i}>
                                            {element}
                                        </li>
                                    ))}
                                </ul>
                            </TextWrap>
                            <Gradient className="gradient"/>
                        </AspectRatioMod>
            </Link>
        ))}        
    </ContainerMod>
)
export default Projects 