import React, { useState } from "react";
import { X, ArrowRight, CheckCheck, Send } from "lucide-react";

// Inline WhatsApp SVG for crisp rendering
export const WhatsAppIcon = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.677.15-.201.301-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.151-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.101-.2.05-.376-.025-.526-.075-.151-.677-1.632-.928-2.235-.244-.588-.493-.508-.677-.518l-.577-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.51 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.43-.075-.126-.276-.201-.577-.352z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2.05 21.604a.75.75 0 0 0 .937.937l4.428-1.388A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-8.5 10c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.46 8.46 0 0 1-4.304-1.173.75.75 0 0 0-.518-.088l-3.327 1.042 1.042-3.327a.75.75 0 0 0-.088-.518A8.46 8.46 0 0 1 3.5 12z"
      fill={color}
    />
  </svg>
);

const WhatsAppWidget = ({
  isOpen,
  onClose,
  phoneNumber = "918754855222",
  displayNumber = "+91 87548 55222",
}) => {
  const [message, setMessage] = useState("");

  const quickQuestions = [
    "👗 Hello YAHLEE, I need help selecting a festive outfit.",
    "📏 Can you assist me with size and custom measurements?",
    "📦 Hi, I'd like to check my order status and delivery.",
    "✨ I would like to inquire about bridal & custom designs.",
    "💎 Can I book a live video shopping consultation?",
  ];

  const handleSelectQuick = (text) => {
    setMessage(text);
  };

  const handleSendToWhatsApp = (e) => {
    if (e) e.preventDefault();
    const finalMsg = message.trim() || "Hello YAHLEE Boutique, I have an inquiry.";
    const waUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(finalMsg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <div
      className="yahlee-floating-window yahlee-wa-window"
      role="dialog"
      aria-label="YAHLEE WhatsApp Support"
    >
      {/* Header */}
      <div className="yahlee-wa-header">
        <div className="yahlee-wa-profile">
          <div className="yahlee-wa-avatar-wrap">
            <img
              src="/images/logo.png"
              alt="YAHLEE Boutique"
              className="yahlee-wa-avatar"
            />
            <span className="yahlee-wa-status-dot" title="Online now" />
          </div>

          <div className="yahlee-wa-info">
            <h4>
              YAHLEE Boutique
              <span className="yahlee-verified-badge" title="Official Store Support">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d366">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </h4>
            <p>Typically replies in minutes • Online</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="yahlee-window-close-btn"
          aria-label="Close WhatsApp chat preview"
        >
          <X size={18} />
        </button>
      </div>

      {/* Body / Chat preview */}
      <div className="yahlee-wa-body">
        <div className="yahlee-wa-date-chip">Today</div>

        {/* Incoming greeting bubble */}
        <div className="yahlee-wa-bubble">
          <strong>Namaste! 🙏</strong>
          <p style={{ marginTop: "4px" }}>
            Welcome to YAHLEE Boutique. How can our styling concierge assist you
            today? Tap a topic below or type your personal message:
          </p>
          <div className="yahlee-wa-time">
            <span>Just now</span>
            <CheckCheck size={14} color="#53bdeb" />
          </div>
        </div>

        {/* Quick prompt chips */}
        <div className="yahlee-wa-quick-actions">
          <span className="yahlee-wa-quick-actions-title">
            Quick Assistance
          </span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              className="yahlee-wa-chip"
              onClick={() => handleSelectQuick(q)}
            >
              <span>{q}</span>
              <ArrowRight size={13} color="#b08a45" />
            </button>
          ))}
        </div>
      </div>

      {/* Footer / Input & Action */}
      <form onSubmit={handleSendToWhatsApp} className="yahlee-wa-footer">
        <textarea
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message to YAHLEE..."
          className="yahlee-wa-input-box"
        />

        <button type="submit" className="yahlee-wa-send-btn">
          <WhatsAppIcon size={19} color="#ffffff" />
          <span>Start Chat on WhatsApp</span>
        </button>

        <span className="yahlee-wa-disclaimer">
          Official Concierge: {displayNumber}
        </span>
      </form>
    </div>
  );
};

export default WhatsAppWidget;
