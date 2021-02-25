import styled from "styled-components";
import Link from "next/link";
import { Container, AspectRatio }  from "./../partials";

const ContainerMod = styled(Container)`
    display: flex; 
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Projects = () => (
    <ContainerMod pb="3" className="gap">
        <Link href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio size="80%" bgColor="#2b9558" src="images/greenyThumb.png" pct="80"/>
                </div>
            </a>
        </Link>
        <Link href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio size="80%" bgColor="#2b9558" src="images/greenyThumb.png" pct="80"/>
                </div>           
            </a>
        </Link>
        <Link href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio size="80%" bgColor="#2b9558" src="images/greenyThumb.png" pct="80"/>
                </div>           
            </a>
        </Link>
        <Link href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}} >
                <div data-aos="fade-up">
                    <AspectRatio size="80%" bgColor="#2b9558" src="images/greenyThumb.png" pct="80"/>
                </div>           
            </a>
        </Link>
       
        
       
    </ContainerMod>
)
export default Projects 