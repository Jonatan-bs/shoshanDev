import styled from "styled-components";
import Layout from './../../components/Layout';
import Header from './../../components/project/Header';
import Content from './../../components/project/Greeny';
import {motion, animatePresence} from "framer-motion"

const Greeny = () => (
        <Layout>  
            <Header src="/images/projects/greeny/headerImg.png" bgColor="#2b9558" title="Greeny" subtext="WEBSITE + GRAFISK DESIGN"/>
            <Content/>
        </Layout>
)

export default Greeny;