"use client";

import Script from "next/script";

export function FrontChat() {
  return (
    <Script
      id="front-chat-script"
      src="https://chat-assets.frontapp.com/v1/chat.bundle.js"
      onLoad={initFrontChat}
      strategy="lazyOnload"
    ></Script>
  );
}

function initFrontChat() {
  //@ts-expect-error
  window.FrontChat("init", {
    chatId: "3c52b76a98df2d446d85d73bebdd7f5d",
    useDefaultLauncher: true,
  });
}
