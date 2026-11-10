import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "LHLS AB – Entreprenad i Älvdalen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const svg = await readFile(join(process.cwd(), "public", "logo-light.svg"), "utf8");
  const logo = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
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
          justifyContent: "center",
          padding: 90,
        }}
      >
        <img src={logo} width={742} height={198} alt="" />
        <div style={{ fontSize: 44, opacity: 0.85, marginTop: 70 }}>
          Inget jobb är för stort eller för litet.
        </div>
        <div style={{ fontSize: 28, opacity: 0.55, marginTop: 14 }}>Älvdalen · Norra Dalarna</div>
      </div>
    ),
    size,
  );
}
