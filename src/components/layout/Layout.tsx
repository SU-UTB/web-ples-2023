import { WrapperMain } from "./wrapper/Wrapper.styled";

interface LayoutInterface {
  children: JSX.Element | Array<JSX.Element>;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    // TODO: Fold
    // TODO: Header
    <WrapperMain>{children}</WrapperMain>
    // TODO: Footer
  );
};

export default Layout;
