import styled from "styled-components";

const Section = styled.section`
  padding: 3rem;
`;

const Card = styled.div`
  margin: 1.5rem auto;
  display: flex;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.3s;
  width: 60%;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  width: 50%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.2rem 1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .meta {
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    color: #999;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .tags {
    font-size: 0.75rem;
    background: #ff6a00;
    color: #fff;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  .stars {
    color: #ff9800;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 0.25rem;
  }

  button {
    align-self: flex-end;
    background: #ff6a00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: #e65a00;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      align-self: stretch;
    }
  }
`;

export default function SectionToday() {
  return (
    <Section>
      <h2>오늘의 추천</h2>
      <Card>
        <ImageWrapper>
          <img
            src="/images/cards/busantoday.webp"
            alt="부산 오늘의 맛집"
            width={400} // 원본 비율 기반으로 이 값만 조절
            height={0} // 생략해도 되고, auto로 계산됨
            style={{ height: "auto", borderRadius: "12px" }}
          />
        </ImageWrapper>
        <Content>
          <div>
            <div className="tags">어제의 핫플</div>
            <div className="stars">
              ★★★★★ <span>5.0</span>
            </div>
            <h3>부산 해운대 ‘바다의 맛’, 신선한 해산물의 천국</h3>
            <p>
              부산 해운대에 위치한 ‘바다의 맛’은 다양한 해산물 요리를 선보이며
              현지인과 관광객 모두에게 사랑받는 맛집입니다. 특히 해산물 모둠과
              활어회는 매일 새벽 직송 재료로 신선도를 보장합니다.
            </p>
            <div className="meta">📍 해운대구 &nbsp;|&nbsp; 👀 113명 읽음</div>
          </div>
          <button>자세히 보기</button>
        </Content>
      </Card>
    </Section>
  );
}
