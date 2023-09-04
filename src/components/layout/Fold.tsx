import styled from 'styled-components';

const Unfold = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: block !important;
    position: fixed;
    overflow: hidden;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 2147483647;

    &:after {
      content: 'Prosím použijte větší zařízení.';
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Unfold;
