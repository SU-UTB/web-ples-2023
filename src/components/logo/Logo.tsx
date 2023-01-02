import styled from "styled-components";
import logo from "../../assets/images/logos/plesLogo.svg";

import theme from "../../theme/theme";

const Wrapper = styled.div`
  text-align: left;
  margin-right: 6em;
`;

const Link = styled.a`
  img {
    max-width: 250px;

    @media screen and (${theme.breakpoints.lteTabletQuery}) {
      max-width: 150px;
    }
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <Link href="/">
        <img src={logo} alt="Ples UTB 2023 logo" />
      </Link>
    </Wrapper>
  );
};

export default Logo;
