"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function OAuthCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log("Authorization Code:", code);
      alert("Authorization Code copied to clipboard ✔");
      navigator.clipboard.writeText(code);
    }
  }, [code]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Zoho Authorization Successful 🎉</h2>
      <p>Check your console, and the code has been copied!</p>
      <p>Use this code in Postman ➜ Token Request</p>
    </div>
  );
}
