import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  overflow: hidden;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-bottom: 10vw;
  padding: 80px 40px;
`;

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  z-index: -1;
`;

export const CTA = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 650px;
`;

export const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
`;

export const SignUp = styled.a`
  width: 100%;
  color: #f9f9f9;
  font-weight: bold;
  background-color: #0063e5;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export const CTALogoTwo = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  vertical-align: bottom;
`;