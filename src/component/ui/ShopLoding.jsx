import { useState, useEffect } from "react";

const shimmerKeyframes = `
  @keyframes shimmer {
    0% { background-position: -800px 0; }
    100% { background-position: 800px 0; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const shimmerStyle = {
  background:
    "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
  backgroundSize: "800px 100%",
  animation: "shimmer 1.8s infinite linear",
};

const darkShimmer = {
  background:
    "linear-gradient(90deg, #2a2a2a 25%, #333 50%, #2a2a2a 75%)",
  backgroundSize: "800px 100%",
  animation: "shimmer 1.8s infinite linear",
};

function SkeletonBlock({ width = "100%", height = 16, radius = 8, style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        flexShrink: 0,
        ...shimmerStyle,
        ...style,
      }}
    />
  );
}

export function ShopLoding() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fafaf8",
        minHeight: "100vh",
        padding: "0",
      }}
    >
      <style>{shimmerKeyframes}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Breadcrumb */}
      <div
        style={{
          padding: "14px 40px",
          borderBottom: "1px solid #ebebeb",
          background: "#fff",
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <SkeletonBlock width={52} height={12} radius={6} />
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e0e0e0" }} />
        <SkeletonBlock width={80} height={12} radius={6} />
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e0e0e0" }} />
        <SkeletonBlock width={120} height={12} radius={6} />
      </div>

      {/* Main layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 40px",
          gap: 56,
        }}
      >
        {/* LEFT — Image panel */}
        <div>
          {/* Main image */}
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              marginBottom: 16,
              ...shimmerStyle,
              aspectRatio: "4/5",
              width: "100%",
            }}
          />

          {/* Thumbnails */}
          <div style={{ display: "flex", gap: 10 }}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  aspectRatio: "1/1",
                  borderRadius: 12,
                  ...shimmerStyle,
                  ...(i === 1
                    ? { outline: "2px solid #d4cfc8", outlineOffset: 2 }
                    : {}),
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Details panel */}
        <div style={{ paddingTop: 8 }}>
          {/* Badge row */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <SkeletonBlock width={72} height={24} radius={20} />
            <SkeletonBlock width={88} height={24} radius={20} />
          </div>

          {/* Title */}
          <div style={{ marginBottom: 6 }}>
            <SkeletonBlock width="95%" height={32} radius={8} style={{ marginBottom: 10 }} />
            <SkeletonBlock width="70%" height={32} radius={8} />
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              margin: "20px 0",
            }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SkeletonBlock key={i} width={18} height={18} radius={4} />
            ))}
            <SkeletonBlock width={90} height={14} radius={6} style={{ marginLeft: 6 }} />
          </div>

          {/* Price row */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
            <SkeletonBlock width={110} height={36} radius={8} />
            <SkeletonBlock width={72} height={20} radius={6} />
            <SkeletonBlock width={52} height={22} radius={20} />
          </div>

          {/* Stock indicator */}
          <SkeletonBlock width={140} height={14} radius={6} style={{ marginBottom: 28 }} />

          <div style={{ height: 1, background: "#ebebeb", marginBottom: 28 }} />

          {/* Color */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <SkeletonBlock width={70} height={14} radius={6} />
              <SkeletonBlock width={52} height={14} radius={6} />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    ...shimmerStyle,
                    ...(i === 2 ? { outline: "2px solid #aaa", outlineOffset: 3 } : {}),
                  }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <SkeletonBlock width={52} height={14} radius={6} />
              <SkeletonBlock width={80} height={14} radius={6} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[48, 48, 48, 48, 48, 48].map((w, i) => (
                <SkeletonBlock
                  key={i}
                  width={w}
                  height={40}
                  radius={10}
                  style={i === 2 ? { outline: "2px solid #333", outlineOffset: 2 } : {}}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: 28 }}>
            <SkeletonBlock width={72} height={14} radius={6} style={{ marginBottom: 12 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <SkeletonBlock width={40} height={42} radius={10} />
              <SkeletonBlock width={52} height={42} radius={0} style={{ margin: "0 2px" }} />
              <SkeletonBlock width={40} height={42} radius={10} />
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            <SkeletonBlock
              width="100%"
              height={52}
              radius={14}
              style={{ flex: 2 }}
            />
            <SkeletonBlock
              width={52}
              height={52}
              radius={14}
              style={{ flexShrink: 0 }}
            />
          </div>

          {/* Secondary button */}
          <SkeletonBlock width="100%" height={52} radius={14} style={{ marginBottom: 32 }} />

          <div style={{ height: 1, background: "#ebebeb", marginBottom: 24 }} />

          {/* Delivery info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
            {[1, 2].map((i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid #ebebeb",
                  background: "#fff",
                }}
              >
                <SkeletonBlock width={36} height={36} radius={10} style={{ flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <SkeletonBlock width="60%" height={13} radius={6} style={{ marginBottom: 6 }} />
                  <SkeletonBlock width="80%" height={11} radius={6} />
                </div>
              </div>
            ))}
          </div>

          {/* Description preview */}
          <div>
            <SkeletonBlock width={120} height={15} radius={6} style={{ marginBottom: 14 }} />
            {[100, 92, 85, 78].map((w, i) => (
              <SkeletonBlock
                key={i}
                width={`${w}%`}
                height={12}
                radius={6}
                style={{ marginBottom: 8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo wrapper with toggle
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 20,
          zIndex: 99,
          display: "flex",
          gap: 8,
        }}
      >
        <button
          onClick={() => setLoading(true)}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border: "none",
            background: loading ? "#1a1a1a" : "#e0e0e0",
            color: loading ? "#fff" : "#555",
            fontFamily: "DM Sans, sans-serif",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Loading
        </button>
        <button
          onClick={() => setLoading(false)}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border: "none",
            background: !loading ? "#1a1a1a" : "#e0e0e0",
            color: !loading ? "#fff" : "#555",
            fontFamily: "DM Sans, sans-serif",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Loaded
        </button>
      </div>
    </div>
  );
}