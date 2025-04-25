import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 2rem;
  background: #1a1a1a;
  color: #aaa;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    © 2025 Luxe Seoul. All rights reserved.
  </FooterWrapper>
);

export default Footer;