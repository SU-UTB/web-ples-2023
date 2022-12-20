import { WrapperSection } from "./wrapper/Wrapper.styled";

interface LayoutInterface {
  children: JSX.Element | Array<JSX.Element>;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    // TODO: Fold
    // TODO: Header
    <WrapperSection>{children}</WrapperSection>
    // TODO: Footer
  );
};

export default Layout;
