import styled from "styled-components";
import theme from '../styles/theme';
import Header from '../components/Header';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Method from '../components/Method';
import Contact from '../components/Contact';
import Layout from '../components/Layout';



const Index = () => (
    <Layout>  
        <Header/>
        <Services/>
        <Projects/>
        <Method/>
        <Contact/>
    </Layout>
)

export default Index;