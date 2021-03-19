import styled from "styled-components";
import Layout from './../../components/Layout';
import Header from './../../components/project/Header';
import Content from './../../components/project/Greeny';
import {motion, animatePresence} from "framer-motion"

const Greeny = () => (
        <Layout>  
            <Header src="/images/projects/infotavle/headerImg.png" bgColor="#2b9558" title="Infotavle" subtext="Webapp"/>
            <Content/>
        </Layout>
)

export default Greeny;