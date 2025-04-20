import styled from "styled-components";

const Section = styled.section`
  padding: 3rem;
  background: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  .badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff6a00;
    color: white;
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
  }
`;

const CardContent = styled.div`
  padding: 1rem;

  .stars {
    color: #ff9800;
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.9rem;
    color: #444;
    line-height: 1.5;
  }

  .meta {
    font-size: 0.8rem;
    color: #777;
    margin-top: 0.5rem;
  }
`;

const CardFooter = styled.div`
  border-top: 1px solid #eee;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  button {
    color: #ff6a00;
    background: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ff6a00;
    color: #ff6a00;
  }
`;

export default function SectionPosts() {
  const posts = [
    {
      title: "을지로 감성포차, 회기반상",
      desc: "감성적인 인테리어와 다양한 안주로 2030 세대에게 인기 있는 포장마차 스타일 맛집.",
      location: "서울 중구",
      rating: 4.8,
      user: "감성리뷰",
      image: "/images/cards/ulgiro.jpg",
    },
    {
      title: "부산 명물 횟집, 오션회센타",
      desc: "해운대 앞바다에서 바로 잡은 활어로 구성된 모둠회가 인기 있는 전통 횟집.",
      location: "부산 해운대구",
      rating: 4.7,
      user: "부산먹방러",
      image: "/images/cards/busanshshi.jpg",
    },
    {
      title: "제주 흑돼지 맛집, 흑도야",
      desc: "직접 키운 흑돼지를 참숯에 구워내는 곳으로 현지인들도 즐겨 찾는 고깃집.",
      location: "제주 서귀포시",
      rating: 4.9,
      user: "제주미식가",
      image: "/images/cards/jejublackpig2.webp",
    },
    {
      title: "한남동 이자카야, 하루한잔",
      desc: "분위기 좋은 바에서 신선한 사시미와 함께 일본식 안주를 즐길 수 있는 공간.",
      location: "서울 용산구",
      rating: 4.5,
      user: "술사랑",
      image: "/images/cards/hanam.webp",
    },
    {
      title: "성수 핫플 디저트, 소프트하우스",
      desc: "부드러운 티라미수와 수제 라떼로 유명한 감성 디저트 카페.",
      location: "서울 성동구",
      rating: 4.6,
      user: "디저트여신",
      image: "/images/cards/sungsu.jpg",
    },
    {
      title: "청담 프렌치 다이닝, 라미띠에",
      desc: "파인 다이닝의 정석, 미쉐린 원스타 출신 셰프가 이끄는 프렌치 코스 전문점.",
      location: "서울 강남구",
      rating: 5.0,
      user: "고급입맛",
      image: "/images/cards/chungdam.webp",
    },
  ];

  return (
    <Section>
      <h2>최근 포스트</h2>
      <Grid>
        {posts.map((post, i) => (
          <Card key={i}>
            <Thumbnail>
              <img src={post.image} alt={post.title} />
              <div className="badge">맛집</div>
            </Thumbnail>
            <CardContent>
              <div className="stars">
                {"★".repeat(Math.floor(post.rating)) + "☆"}{" "}
                <span>{post.rating.toFixed(1)}</span>
              </div>
              <h4>{post.title}</h4>
              <p>{post.desc}</p>
              <div className="meta">
                📍 {post.location} &nbsp;·&nbsp; 🕒 3일 전
              </div>
            </CardContent>
            <CardFooter>
              <span>👤 {post.user}</span>
              <button>자세히 보기</button>
            </CardFooter>
          </Card>
        ))}
      </Grid>

      <LoadMoreButton>더 불러오기</LoadMoreButton>
    </Section>
  );
}
