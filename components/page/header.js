import styled from "styled-components";
import {Heading, Container} from "./../partials"

const Header = ({title}) => (
      <Container>
            <Heading size="xl" caps> {title} </Heading>
      </Container>
)

export default Header;
