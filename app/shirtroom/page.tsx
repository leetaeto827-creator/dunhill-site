import Link from "next/link";

export default function ShirtroomPage() {
  return (
    <main style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
      <div style={{ maxWidth: "430px", margin: "0 auto", color: "white" }}>
        <h1 style={{ color: "gold", textAlign: "center", marginBottom: "30px" }}>
          Q&A 룸 가라오케 란?
        </h1>

        {[
          ["가게 위치는 어디인가요?", "저 이달인 실장은 신촌역과 마포역 인근에 있는 룸,가라오케 들을 소개시켜 드립니다."],
          ["가격, 시스템은 어떻게 되나요?", "소주,맥주+안주 무제한+T.C를 원칙으로 구성 되어있습니다. 비 강남권에서 최저의 가격 + 최고의 비주얼을 자랑합니다.."],
          ["중간에 교체 가능한가요?", "물론 입니다. 더 좋은 선택이 있다면 가능합니다."],
          ["서비스는 무엇인가요?", "프라이빗하고, 만인이 만족하는 힐링 서비스를 제공 합니다."],
          ["차량 무료 픽업 가능한가요?", "네, 서울 전 지역 가능합니다. 이달인 실장은 운전 경력 10년 이상, 무사고 운전 경력을 보유하고 있으며 편안하고 안전하게 모시겠습니다."],
        ].map(([q, a]) => (
          <section
            key={q}
            style={{
              border: "1px solid gold",
              borderRadius: "16px",
              padding: "18px",
              marginBottom: "18px",
              lineHeight: "1.7",
            }}
          >
            <h2 style={{ color: "gold", fontSize: "20px" }}>Q. {q}</h2>
            <p style={{ fontSize: "16px" }}>A. {a}</p>
          </section>
        ))}

        <Link
          href="/"
          style={{
            display: "block",
            backgroundColor: "gold",
            color: "black",
            textAlign: "center",
            padding: "18px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "30px",
          }}
        >
          메인으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
