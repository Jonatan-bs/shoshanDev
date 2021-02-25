import styled from "styled-components";
import Layout from './../../components/Layout';
import Header from './../../components/project/Header';
import Content from './../../components/project/Content';
import {motion, animatePresence} from "framer-motion"



const ProjectIndex = () => (
        <Layout>  
            <Header/>
            <Content/>
        </Layout>
)

export default ProjectIndex;