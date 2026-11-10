import { ImageResponse } from "next/og";

export const alt = "LHLS AB – Entreprenad i Älvdalen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 200, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>LHLS</div>
        <div style={{ height: 3, width: 120, background: "#fff", margin: "36px 0" }} />
        <div style={{ fontSize: 44, opacity: 0.85 }}>Inget jobb är för stort eller för litet.</div>
        <div style={{ fontSize: 28, opacity: 0.55, marginTop: 14 }}>Entreprenad i Älvdalen</div>
      </div>
    ),
    size,
  );
}
