import Link from "next/link";

export default function Home() {
  return (
    <main style={{ backgroundColor: "black", minHeight: "100vh", margin: 0, padding: 0 }}>
      <style>{`
        @keyframes goldShine {
          from {
            opacity: 0.65;
            text-shadow: 0 0 6px gold;
          }
          to {
            opacity: 1;
            text-shadow: 0 0 18px gold, 0 0 35px orange;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 1s ease forwards;
        }

        .gold-shine {
          animation: goldShine 1.2s infinite alternate;
        }

        .gold-button {
          transition: all 0.25s ease;
        }

        .gold-button:hover {
          transform: scale(1.04);
          box-shadow: 0 0 22px gold;
        }
      `}</style>

      <div style={{ maxWidth: "430px", margin: "0 auto", backgroundColor: "black", textAlign: "center" }}>
        <img className="fade-in" src="/banner.png" alt="던힐 배너" style={{ width: "100%", display: "block" }} />

        <img className="fade-in" src="/girl.png" alt="메인 이미지" style={{ width: "100%", display: "block", animationDelay: "0.3s" }} />

        <section className="gold-shine fade-in" style={{ margin: "24px 16px", padding: "28px 18px", border: "1px solid gold", borderRadius: "22px", color: "gold" }}>
          <h1>마포역 · 신촌역 인근</h1>
          <h2>최저의 가격</h2>
          <h2>최고의 비주얼</h2>
        </section>

        <section className="fade-in" style={{ margin: "20px 16px", padding: "24px 18px", border: "1px solid gold", borderRadius: "18px", color: "white", lineHeight: "1.8" }}>
          <p>안녕하세요.</p>
          <p>형님들의 즐거운 밤을 책임질<br />이달인 실장입니다.</p>
          <p>저희 가게는 신촌역, 마포역 인근에 위치한<br />비강남권 최대 규모의 메이저 셔츠룸입니다.</p>
          <p>형님들께서 귀중한 시간을 내어 방문해 주시는 만큼, 만족스러운 서비스를 제공하기 위해 항상 최선을 다하고 있습니다.</p>
          <p>언제든 편하게 문의 주시면<br />친절하고 상세하게 안내해 드리겠습니다.</p>
          <p style={{ color: "gold", fontWeight: "bold" }}>감사합니다.<br />이달인 실장</p>
        </section>

        <div className="fade-in" style={{ padding: "20px 16px" }}>
          <a className="gold-button" href="tel:01080399532" style={{ display: "block", backgroundColor: "gold", color: "black", padding: "18px", borderRadius: "14px", textDecoration: "none", fontSize: "22px", fontWeight: "bold", marginBottom: "14px" }}>
            📞 전화 문의
          </a>

          <a className="gold-button" href="sms:01080399532" style={{ display: "block", border: "1px solid gold", color: "gold", padding: "18px", borderRadius: "14px", textDecoration: "none", fontSize: "22px", fontWeight: "bold", marginBottom: "14px" }}>
            💬 문자 문의
          </a>

          <Link className="gold-button" href="/shirtroom" style={{ display: "block", border: "1px solid gold", color: "gold", padding: "18px", borderRadius: "14px", textDecoration: "none", fontSize: "20px", fontWeight: "bold", marginBottom: "14px" }}>
            ❓ 셔츠룸이란?
          </Link>

         
        </div>
      </div>
    </main>
  );
}
