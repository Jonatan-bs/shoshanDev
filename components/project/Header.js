import styled from "styled-components";
import {AspectRatio, Image, Heading, Text, Link} from "./../partials"
import {motion, animatePresence} from "framer-motion"
import animation from "./../../scripts/animations"

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 50px 0px;
    background: ${({bgColor}) => (bgColor || "#333")};
    flex-wrap:wrap;
    min-height: 600px;
    padding-bottom: 50px;
`;


const MethodDiv = styled.div`
    // width: 60%;
    width: 620px;
    padding: 0 80px 0 80px;
`
const ProjectImage = styled(AspectRatio)`
    // margin-left: -30%;
    // max-width: 800px;
`

const Subtext = styled(Text)`
    opacity: .4;
`
const StyledText = styled(Text)`
    opacity: 0.5;
`

const LogoWrap = styled.div`
    width: 100%;
    text-align: center;
`
const Logo = styled.img.attrs({ src:"/images/logo.svg", alt: "Shoshan Development" })`
    width:100%;
    max-width:330px;
    margin: 50px;
`



const Header = ({src, alt, title, subtext, bgColor }) => (
    <motion.div initial='initial' animate='animate'>
                        
        <Link href="/" width="100%">
            <LogoWrap>
                <Logo/>
            </LogoWrap>
        </Link>
        <motion.div variants={animation.stagger}>
            <Container bgColor={bgColor}>
                <motion.div variants={animation.fadeRight}>
                    <ProjectImage  
                        width="600px" 
                        size="contain" 
                        src={src} 
                        alt={alt} 
                        pct="100"
                    />
                </motion.div>
                <MethodDiv>
                    
                        <motion.div variants={animation.fadeUp}>
                            <Heading as="h1" size="lg" color="light" caps>{title}</Heading>
                        </motion.div>
                        
                        <motion.div variants={animation.fadeUp}>
                            <Subtext as="h2" size="sm" caps bold pb=".5">
                                {subtext}
                            </Subtext>                    
                        </motion.div>
                        
                        {/* <motion.div variants={animation.fadeUp}>
                            <StyledText color="light" size="md">
                                Læs om hvordan jeg finder frem til
                                det perfekte design til dit projekt. 
                            </StyledText>                    
                        </motion.div> */}

                        
                        
                </MethodDiv>
            </Container>
        </motion.div>

    </motion.div>
)

export default Header 