import Link from "next/link";

export default function RecruitPage() {
  return (
    <main
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "430px",
          margin: "0 auto",
          color: "white",
        }}
      >
        <h1
          style={{
            color: "gold",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          👑 공주님들 상시모집
        </h1>

        <section
          style={{
            border: "1px solid gold",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "18px",
            lineHeight: "1.8",
          }}
        >
          <h2 style={{ color: "gold" }}>
            Q. 지원 방법은 어떻게 하나요?
          </h2>

          <p>
            A. 전화 및 문자 그리고 카카오 톡으로 지원하실 수 있습니다.
          </p>

          <p>
            전화 및 문자 지원 (010 8039 9532)
          </p>
        </section>

        <section
          style={{
            border: "1px solid gold",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "18px",
            lineHeight: "1.8",
          }}
        >
          <h2 style={{ color: "gold" }}>
            Q. 갯수는 보장되어 있나요?
          </h2>

          <p>
            A. 네 저희 가게는 신촌점과 마포점이 있으며 둘다 상권이 발달되고
            접근성이 좋은 장소에 위치해 있습니다. 또한 저 이달인 실장은
            다수의 지명 손님과 검증된 신규 손님 유치 능력을 가지고 있습니다.
            걱정하지 마세요. 갯수는 확실히 보장시켜 드리겠습니다.
          </p>
        </section>

        <section
          style={{
            border: "1px solid gold",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "18px",
            lineHeight: "1.8",
          }}
        >
          <h2 style={{ color: "gold" }}>
            Q. 애로사항은 어떻게 처리하나요?
          </h2>

          <p>
            A. 저 이달인 실장에게 친 오빠처럼 편안하게 말씀해 주시면 됩니다.
            공주님들의 불편함을 해결하기 위해 최선을 다하겠습니다. 😎
          </p>
        </section>

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
