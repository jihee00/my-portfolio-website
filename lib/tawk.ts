// lib/tawk.ts
declare global { interface Window { Tawk_API?: any } }

export function openTawkChat() {
  if (typeof window === "undefined") return;

  const run = () => {
    try {
      // 말풍선 숨겨놨다면 다시 보이게
      window.Tawk_API.showWidget?.();
      // 채팅창 열기
      window.Tawk_API.maximize?.();
      // 대시보드 트리거에서 조건으로 쓰고 싶다면 이벤트 남기기(선택)
      window.Tawk_API.addEvent?.("opened_via_button");
    } catch (e) {
      console.error("Tawk open error:", e);
    }
  };

  if (window.Tawk_API?.maximize) {
    run();
  } else {
    // 아직 로드 전이면 onLoad에 후킹
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    const prev = window.Tawk_API.onLoad;
    window.Tawk_API.onLoad = function () {
      prev?.();
      run();
    };
  }
}
