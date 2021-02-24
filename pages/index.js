import styled from "styled-components";
import theme from '../styles/theme';
import Header from '../components/frontpage/Header';
import Services from '../components/frontpage/Services';
import Projects from '../components/frontpage/Projects';
import Method from '../components/frontpage/Method';
import Contact from '../components/frontpage/Contact';
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