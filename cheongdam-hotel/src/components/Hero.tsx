import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  span {
    color: #f4c430;
  }
`;

const NavLink = styled.a`
  color: #f4c430;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const ReserveButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #f4c430;
  background: transparent;
  color: #f4c430;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #f4c430;
    color: #111;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #7a7a7a, #505050);
  color: #f5f5f5;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-family: 'Noto Serif KR', serif;
  font-weight: 600;
  color: #fff;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 4px;
  background: #f4c430;
  color: #111;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e0b52f;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;

  &:hover {
    background: #fff;
    color: #111;
  }
`;

const IndicatorWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.span`
  display: inline-block;
  width: 30px;
  height: 4px;
  background: #f4c430;
  opacity: 0.5;
  transition: opacity 0.3s;

  &.active {
    opacity: 1;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo>
        LUXE <span>SEOUL</span>
      </Logo>
      <Nav>
        <NavLink href="#">객실</NavLink>
        <NavLink href="#">다이닝</NavLink>
        <NavLink href="#">스파</NavLink>
        <NavLink href="#">웨딩</NavLink>
        <NavLink href="#">미팅</NavLink>
        <NavLink href="#">갤러리</NavLink>
      </Nav>
      <ReserveButton>예약하기</ReserveButton>
    </Header>
  );
};

const Hero = () => (
  <Section>
    <Title>기대를 넘어선 럭셔리</Title>
    <Subtitle>청담동의 중심에서 경험하는 최상의 호스피탈리티</Subtitle>
    <ButtonGroup>
      <PrimaryButton>객실 보기</PrimaryButton>
      <SecondaryButton>더 알아보기</SecondaryButton>
    </ButtonGroup>
    <IndicatorWrapper>
      <Dot className="active" />
      <Dot />
      <Dot />
    </IndicatorWrapper>
  </Section>
);

export default Hero;
export { HeaderComponent };
