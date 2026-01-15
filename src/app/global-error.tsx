"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            fontFamily:
              'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: "#FAFAFA",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "500px" }}>
            {/* Error Icon */}
            <div
              style={{
                width: "96px",
                height: "96px",
                margin: "0 auto 2rem",
                backgroundColor: "#FEE2E2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DC2626"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            {/* Message */}
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Critical Error
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#4B5563",
                marginBottom: "2rem",
                lineHeight: "1.6",
              }}
            >
              A critical error has occurred. We apologize for the inconvenience.
              Please try refreshing the page.
            </p>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => reset()}
                style={{
                  backgroundColor: "#EFAB05",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Try Again
              </button>
              <a
                href="/"
                style={{
                  color: "#1E40AF",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                Return to Homepage
              </a>
            </div>

            {/* Error ID */}
            {error.digest && (
              <p
                style={{
                  marginTop: "2rem",
                  fontSize: "0.75rem",
                  color: "#9CA3AF",
                }}
              >
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
