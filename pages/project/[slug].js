import styled from "styled-components";
import Layout from './../../components/Layout';
import Header from './../../components/project/Header';
import {Container, Text, Grid} from './../../components/partials';
import InfoBox from './../../components/project/partials/InfoBox';
// import Content from './../../components/project/Content';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";
import DynamicContent from "./../../components/partials/DynamicContent"

const Project = ({project}) => (
        <>     
            <Header src={getStrapiMedia(project.headerImage)} bgColor={project.bgColor || "#333"} title={project.title} subtitle={project.subtitle}/>
            {/* <Content project={project}/> */}
            <Container py="3"> 
                <Grid cols={["65%","35%"]}>
                    <Text size="md" pr="1" lh="1.6" data-aos="fade-right">
                        {project.text}
                    </Text>
                    
                    <InfoBox entries={project.info}/>
                </Grid>
            </Container>
            <DynamicContent content={project.content}/>   
        </>
)

export default Project;

export async function getStaticProps({params}){
    const {slug} = params
    let project = await fetchAPI('/projects?slug=' + slug)
    project = project[0]
    return {props: project}    
}

export async function getStaticPaths() {
    let projects = await fetchAPI('/projects')

    return {
      paths: projects?.map((project) => `/${project.slug}`) || [],
      fallback: true,
    }
  }