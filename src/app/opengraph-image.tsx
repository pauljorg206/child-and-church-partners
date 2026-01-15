import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Child & Church Partners - Overcome Barriers. Lead Change.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      {/* Logo circle placeholder */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "60px",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
          fontSize: "48px",
        }}
      >
        C&C
      </div>

      {/* Organization name */}
      <div
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Child & Church Partners
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "32px",
          color: "#d4a84b",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Overcome Barriers. Lead Change.
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "24px",
          color: "#e0e0e0",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Helping children and churches in the Philippines fulfill their fullest
        potential
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "8px",
          background: "#d4a84b",
        }}
      />
    </div>,
    {
      ...size,
    }
  );
}
