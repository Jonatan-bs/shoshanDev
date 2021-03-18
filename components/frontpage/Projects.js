import styled from "styled-components";
import Link from "next/link";
import { Container, AspectRatio, Heading }  from "./../partials";

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


const Projects = () => (
    <ContainerMod pb="3" className="gap">
        <Link  href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio gradient size="cover" bgColor="#2b9558" src="/images/project-thumb-greeny.jpg" pct="80">
                        <TextWrap>
                            <Title as="p" size="lg">Greeny</Title>
                            <ul>
                                <li>
                                    Webshop
                                </li>
                                <li>
                                    Design
                                </li>
                            </ul>
                        </TextWrap>

                        <Gradient/>

                    </AspectRatio>
                </div>
            </a>
        </Link>
        <Link  href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio size="80%" bgColor="#2b9558" src="/images/greenyThumb.png" pct="80"/>
                </div>           
            </a>
        </Link>
        <Link  href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio size="80%" bgColor="#2b9558" src="/images/greenyThumb.png" pct="80"/>
                </div>           
            </a>
        </Link>
        <Link  href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio size="80%" bgColor="#2b9558" src="/images/greenyThumb.png" pct="80"/>
                </div>           
            </a>
        </Link>
       
        
       
    </ContainerMod>
)
export default Projects 