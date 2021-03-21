import styled from "styled-components";
import theme from '../styles/theme';
import Header from '../components/frontpage/Header';
import Services from '../components/frontpage/Services';
import Projects from '../components/frontpage/Projects';
import Method from '../components/frontpage/Method';
import Contact from '../components/frontpage/Contact';
import Layout from '../components/Layout';
import { getStrapiMedia, fetchAPI } from "../lib/api";


const Index = ({projects, frontpage}) => (
    <Layout>  
        <Header subtext={(!frontpage || frontpage.error || !frontpage.subtext  ) ? [] :frontpage.subtext}/>
        <Services/>
        <Projects projects={(!projects || projects.error )? [] : projects }/>
        <Method/>
        <Contact/>
    </Layout>
)

export default Index;

Index.getInitialProps = async (ctx) => {
    const projects = await fetchAPI('/projects');
    const frontpage = await fetchAPI('/frontpage');
    return { projects, frontpage }
}