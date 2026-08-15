import { ImageResponse } from "next/og";

export const alt = "Shiva Subramaniyam — Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #6366F1 0%, #9333EA 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          Shiva Subramaniyam
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 40,
            fontWeight: 500,
            opacity: 0.92,
          }}
        >
          Full Stack Developer — React · Next.js · Node.js · MongoDB
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 24,
            opacity: 0.75,
          }}
        >
          Portfolio, Projects &amp; Real-World Full-Stack Applications
        </div>
      </div>
    ),
    { ...size }
  );
}
