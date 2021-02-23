import styled from "styled-components";
import { Container, AspectRatio }  from "./partials";

const ContainerMod = styled(Container)`
    display: flex; 
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Projects = () => (
    <ContainerMod pb="3" className="gap">
        <AspectRatio src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100" width={"calc(50% - 6px)"}  />
        <AspectRatio src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100" width={"calc(50% - 6px)"} />
        <AspectRatio src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100" width={"calc(50% - 6px)"} />
        <AspectRatio src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100" width={"calc(50% - 6px)"} />
    </ContainerMod>
)
export default Projects 