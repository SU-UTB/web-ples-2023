import logo from "../../assets/images/logos/plesLogo.svg";
import { Link, WrapperLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <WrapperLogo>
      <Link href="/">
        <img src={logo} alt="Ples UTB 2023 logo" />
      </Link>
    </WrapperLogo>
  );
};

export default Logo;
