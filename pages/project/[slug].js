import styled from "styled-components";
import Layout from './../../components/Layout';
import Header from './../../components/project/Header';
import {Container, Text, Grid} from './../../components/partials';
import InfoBox from './../../components/project/partials/InfoBox';
// import Content from './../../components/project/Content';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";
import DynamicContent from "./../../components/partials/DynamicContent"
import {useRouter} from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'

const Project = ({project}) => {
    
    const router = useRouter()
    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
    if( !project || project.error) {
        return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
            </Head>
            <DefaultErrorPage statusCode={404} />
        </>
        )
    }
    

    return (
        <>     
            <Header src={getStrapiMedia(project.headerImage)} bgColor={project.bgColor || "#333"} title={project.title} subtitle={project.subtitle}/>
            {/* <Content project={project}/> */}
            <Container py="3"> 
                <Grid cols={["65%","35%"]}>
                    <Text pr="1" lh="1.6" data-aos="fade-right">
                        {project.text}
                    </Text>
                    
                    <InfoBox entries={project.info}/>
                </Grid>
            </Container>
            <DynamicContent content={project.content}/>   
        </>
    )
}

export default Project;

export async function getStaticProps({params}){
    const {slug} = params
    let project = await fetchAPI('/projects?slug=' + slug)
    
    project = project.length? project.error || project[0] : null
    return {props: {project}}    
}

export async function getStaticPaths() {
    let projects = await fetchAPI('/projects')
    return {
      paths: projects?.map((project) => `/project/${project.slug}` || []),
      fallback: false,
    }
  }