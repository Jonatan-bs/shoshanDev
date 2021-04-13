import styled from "styled-components";
import {AspectRatio, Image} from "./../partials"
import {motion, animatePresence} from "framer-motion"
import animation from "./../../scripts/animations"

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
    font-size: 50px;
    background: ${ ({theme}) => theme.colors.primary };
`;

const SubText = styled.h2`
    color: ${ ({theme}) => theme.colors.primaryDark }; 
    font-size: 40px;
    font-weight: normal;
    max-width: 1000px;
    padding: 20px 80px;
    text-align: center;
`

const LogoWrap = styled.h1`
    max-width: 1000px; 
    width:100%;
    position: relative
`



const Rose = styled(AspectRatio)`
    &>div{
    background-blend-mode: multiply;
    background-color: ${ ({theme}) => theme.colors.primary };
    }
`


const Header = ({subtext}) => (
    <motion.div initial='initial' animate='animate'>
            <Container> 
                <motion.div variants={animation.fade}  style={{width:"100%", maxWidth: "730px"}}>
                    <Rose src="/images/rose.jpg" pct="68" width="100%" maxWidth="730px"/>
                </motion.div>
                <motion.div variants={animation.stagger}>
                    <motion.div variants={animation.fadeUp}  style={{width:"100%"}}>
                        <LogoWrap>
                            <Image src="/images/logo-light.svg" alt="Shoshan Development" />
                        </LogoWrap>
                    </motion.div>
                    <motion.div variants={animation.fadeUp}  style={{width:"100%"}}>
                        <SubText>{subtext} </SubText>
                    </motion.div>
                </motion.div>
            </Container>
    </motion.div>
)
export default Header 