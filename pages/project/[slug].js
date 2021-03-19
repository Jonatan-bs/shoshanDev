import styled from "styled-components";
import Layout from './../../components/Layout';
import Header from './../../components/project/Header';
import Content from './../../components/project/Content';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";

const Project = ({project}) => (
        <Layout>  
            <Header src={getStrapiMedia(project.headerImage)} bgColor={project.bgColor || "#333"} title={project.title} subtitle={project.subtitle}/>
            <Content project={project}/>
        </Layout>
)

export default Project;

Project.getInitialProps = async (ctx) => {
    const {slug} = ctx.query
    let project = await fetchAPI('/projects?slug=' + slug)
    project = project[0]
    return { project }
}