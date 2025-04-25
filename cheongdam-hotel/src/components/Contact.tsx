import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 2rem;
  background: #fcfbf8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1000px;
  width: 100%;
  gap: 3rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #444;
  font-size: 0.95rem;
`;

const Icon = styled.span`
  font-size: 1.1rem;
  margin-right: 0.75rem;
`;

const FormCard = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;

const FormTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FormDesc = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  height: 120px;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  resize: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #c4a076;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #b28c63;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>연락처 & 예약</Title>
          <Description>
            궁금한 점이 있으시거나 예약을 원하시면 아래 정보를 통해 연락주세요.
            럭스 서울의 전문 컨시어지가 최상의 서비스로 모시겠습니다.
          </Description>
          <InfoItem>
            <Icon>📍</Icon>
            위치: 서울특별시 강남구 청담동 123-45
          </InfoItem>
          <InfoItem>
            <Icon>📞</Icon>
            전화: 02-1234-5678
          </InfoItem>
          <InfoItem>
            <Icon>📧</Icon>
            이메일: reservation@luxeseoul.com
          </InfoItem>
          <InfoItem>
            <Icon>⏰</Icon>
            운영 시간: 체크인: 오후 3시 / 체크아웃: 정오 12시
            <br />
            예약 문의: 24시간
          </InfoItem>
        </Left>

        <FormCard>
          <FormTitle>문의하기</FormTitle>
          <FormDesc>
            궁금한 점이 있으시면 아래 양식을 통해 문의해주세요.
          </FormDesc>
          <Row>
            <Input placeholder="성함" />
            <Input placeholder="example@email.com" />
          </Row>
          <Input placeholder="문의 제목" />
          <Textarea placeholder="문의 내용을 입력해주세요" />
          <Button>문의하기</Button>
        </FormCard>
      </Container>
    </Section>
  );
};

export default Contact;
