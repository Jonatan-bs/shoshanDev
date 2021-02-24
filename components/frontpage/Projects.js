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
            <a style={{ "width":"calc(50% - 6px)"}}>
                <AspectRatio  bgColor="#e7e7e7" src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100"/>
            </a>
        </Link>
        <Link href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}}>
                <AspectRatio  bgColor="#e7e7e7" src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100"/>
            </a>
        </Link>
        <Link href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}}>
                <AspectRatio  bgColor="#e7e7e7" src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100"/>
            </a>
        </Link>
        <Link href="project/test">
            <a style={{ "width":"calc(50% - 6px)"}}>
                <AspectRatio  bgColor="#e7e7e7" src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100"/>
            </a>
        </Link>
        
       
    </ContainerMod>
)
export default Projects 