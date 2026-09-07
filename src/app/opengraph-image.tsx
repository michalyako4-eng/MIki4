import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.businessName} · Reiki in ${site.location.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf7f2",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "999px",
              border: "3px solid #e8608a",
            }}
          />
          <div style={{ display: "flex", fontSize: 30, color: "#6a6058" }}>
            {site.businessName} · {site.brandTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            lineHeight: 1.1,
            color: "#1f1b16",
            letterSpacing: "-0.02em",
          }}
        >
          <div>A space to slow down,</div>
          <div>and simply receive care.</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#6a6058" }}>
          Reiki &amp; Access Bars · Alamo and Walnut Creek, CA
        </div>
      </div>
    ),
    size,
  );
}
