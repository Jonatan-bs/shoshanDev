import styled from "styled-components";
import Link from "next/link";
import { Container, AspectRatio, Heading }  from "./../partials";
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


const Projects = ({projects}) => (
    <ContainerMod pb="3" className="gap">
        {projects.map((project, i) => (
            <Link key={i}  href={"/project/" + project.slug}>
                <a style={{ "width":"calc(50% - 6px)"}} >
                    <div data-aos="fade-up">
                        <AspectRatio gradient size="cover" bgColor={project.bgColor || "#333"} src={getStrapiMedia(project.thumbnail)} pct="80">
                            <TextWrap>
                                <Title as="p" size="lg">{project.title}</Title>
                                <ul>
                                    { project.subtitle.map( ({element}, i) => (
                                        <li key={i}>
                                            {element}
                                        </li>
                                    ))}
                                </ul>
                            </TextWrap>
                            <Gradient/>
                        </AspectRatio>
                    </div>
                </a>
            </Link>
        ))}        
    </ContainerMod>
)
export default Projects 