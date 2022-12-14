import styled from "styled-components";

const Unfold = styled.div`
  display: none;
  @media (max-width: 300px) {
    display: block !important;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 2147483647;

    &:after {
      content: "Please, unfold your device.";
      display: block;
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Fold() {
  return <Unfold />;
}

export default Fold;
