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

    // (선택) 기본 런처 숨기고 싶으면 이 코드 추가
    // window.Tawk_API = window.Tawk_API || {};
    // window.Tawk_API.onLoad = function () {
    //   window.Tawk_API.hideWidget();
    // };
  }, []);

  return null;
}

