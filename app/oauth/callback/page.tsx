"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function CallbackContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log("Authorization Code:", code);
      navigator.clipboard.writeText(code);
      alert("Authorization Code copied ✔");
    }
  }, [code]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Zoho Authorization Successful 🎉</h2>
      <p>Code copied to clipboard.</p>
      <p>Use this code in Postman ➜ Token Request</p>
    </div>
  );
}

export default function OAuthCallback() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
