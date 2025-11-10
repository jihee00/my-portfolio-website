"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: any;
  }
}

export default function TawkWidget() {
  useEffect(() => {
  
    if (document.getElementById("tawk-script")) return;

    const s1 = document.createElement("script");
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/69113596ee2732195b2fbee8/1j9ljilb9";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);


    (window as any).Tawk_API = (window as any).Tawk_API || {};
    const prevOnLoad = window.Tawk_API.onLoad;
    window.Tawk_API.onLoad = function () {
      try {
        prevOnLoad?.();
        window.Tawk_API.showWidget?.();   // 런처 보이기
        window.Tawk_API.minimize?.();     // 전체화면(최대화) 방지
      } catch (e) {}
    };
  }, []);

  return null;
}

