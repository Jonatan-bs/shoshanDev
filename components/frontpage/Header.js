import styled from "styled-components";
import { keyframes } from 'styled-components'
import mq from "../../styles/breakpoints";
import {AspectRatio, Container, Text} from "./../partials"
import {motion, animatePresence} from "framer-motion"
import animation from "./../../scripts/animations"
import Image from "next/image"

const HeaderWrap = styled(Container)`
`;
const ContainerMod = styled(Container)`
    background: #111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubText = styled(Text)`
    // font-size: 2rem;
    
    

`

const LogoWrap = styled(Text)`
    max-width: 700px; 
    width:100%;
    position: relative;
    margin: 0 auto;
`


const RoseWrap = styled(motion.div)`
    position: absolute;
    z-index: 1;
`
const Rose = styled(Image)`
`
const ZIndex = styled.div`
    z-index: 1;
`
const spotLightAnimation = keyframes`
    0% { top: -300px; left: 0 }
    50% { left:calc(100% - 600px); top:calc(100% - 600px); }
    100% { top: -300px; left: 0 }
`

const SpotLight = styled.div`
    top: -300px; left: 0;    
    height: 800px;
    width: 800px;
    background: #fff;
    border-radius: 100%;
    z-index: 2;
    position: absolute;
    filter: blur(900px);
    opacity: .15;
    animation-name: ${spotLightAnimation};
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear
`



const Header = ({subtext}) => (
    <motion.div initial='initial' animate='animate'>
            <HeaderWrap as="header" wide py=".5" px=".5"> 
                <ContainerMod py="5" px="1" wide> 
                    <SpotLight/>
                    <RoseWrap>
                        <Rose width="730" height="494" src="/images/rose-black-bg.jpg" priority/>
                    </RoseWrap>
                    <ZIndex>
                        <motion.div variants={animation.stagger}>
                            <motion.div variants={animation.fadeUp}  style={{width:"100%"}}>
                                <LogoWrap as="h1">
                                    <Image width="1000" height="221" src="/images/logo-light.svg" alt="Shoshan Development" priority/>
                                </LogoWrap>
                            </motion.div>
                            <motion.div variants={animation.fadeUp}  style={{width:"100%", maxWidth:"1000px"}}>
                                <SubText as="h2" py=".5" size="xs" color="dark3" italic center>{subtext} </SubText>
                            </motion.div>
                        </motion.div>
                    </ZIndex>                    
                </ContainerMod>
            </HeaderWrap>
    </motion.div>
)
export default Header 