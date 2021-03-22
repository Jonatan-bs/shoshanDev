import styled from "styled-components";
import theme from '../styles/theme';
import Header from '../components/frontpage/Header';
import Services from '../components/frontpage/Services';
import Projects from '../components/frontpage/Projects';
import Method from '../components/frontpage/Method';
import Contact from '../components/frontpage/Contact';
import Layout from '../components/Layout';
import { getStrapiMedia, fetchAPI } from "../lib/api";
import App from 'next/app'


const Index = ({projects, frontpage}) => (
    <>  
        
        <Header subtext={(!frontpage || frontpage.error || !frontpage.subtext  ) ? [] :frontpage.subtext}/>
        <Services services={frontpage.services}/>
        <Projects projects={(!projects || projects.error )? [] : projects }/>
        <Method/>
        <Contact contactBox={frontpage.contactBox}/>
    </>
)

export default Index;

Index.getInitialProps = async (ctx) => {
    // const appProps = await App.getInitialProps(ctx)
    const projects = await fetchAPI('/projects');
    const frontpage = await fetchAPI('/frontpage');
    
    return { projects, frontpage }
}
