import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  top: 72px;
  display: block;
  min-height: calc(100vh - 250px);
  padding: 5px calc(3.5vw + 5px);
  overflow-x: hidden;

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    opacity: 1;
    z-index: -1;
  }
`;