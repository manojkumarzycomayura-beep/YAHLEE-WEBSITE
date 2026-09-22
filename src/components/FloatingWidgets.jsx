import React, { useState } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";
import WhatsAppWidget, { WhatsAppIcon } from "./WhatsAppWidget";
import ChatBox from "./ChatBox";
import "./FloatingWidgets.css";

const FloatingWidgets = () => {
  // activeWidget: null | 'whatsapp' | 'chat'
  const [activeWidget, setActiveWidget] = useState(null);

  const toggleWhatsApp = () => {
    setActiveWidget((prev) => (prev === "whatsapp" ? null : "whatsapp"));
  };

  const toggleChat = () => {
    setActiveWidget((prev) => (prev === "chat" ? null : "chat"));
  };

  const closeWidgets = () => {
    setActiveWidget(null);
  };

  const switchToWhatsApp = () => {
    setActiveWidget("whatsapp");
  };

  return (
    <>
      {/* WhatsApp Floating Window Popup */}
      <WhatsAppWidget
        isOpen={activeWidget === "whatsapp"}
        onClose={closeWidgets}
        phoneNumber="919999999999"
        displayNumber="+91 99999 99999"
      />

      {/* Boutique AI Concierge Chat Box Window */}
      <ChatBox
        isOpen={activeWidget === "chat"}
        onClose={closeWidgets}
        onSwitchToWhatsApp={switchToWhatsApp}
      />

      {/* Floating Action Buttons Dock */}
      <aside className="yahlee-floating-dock" aria-label="Customer Support and Chat Options">
        {/* WhatsApp Floating Button */}
        <button
          type="button"
          onClick={toggleWhatsApp}
          className={`yahlee-fab yahlee-fab-whatsapp ${
            activeWidget === "whatsapp" ? "" : "yahlee-fab-pulse"
          }`}
          aria-label={
            activeWidget === "whatsapp"
              ? "Close WhatsApp Chat"
              : "Open WhatsApp Chat"
          }
          aria-expanded={activeWidget === "whatsapp"}
        >
          {activeWidget === "whatsapp" ? (
            <X size={24} />
          ) : (
            <WhatsAppIcon size={30} color="#ffffff" />
          )}
          <span className="yahlee-fab-tooltip">Chat on WhatsApp</span>
        </button>

        {/* Live Boutique Stylist Chat Button */}
        <button
          type="button"
          onClick={toggleChat}
          className="yahlee-fab yahlee-fab-chat"
          aria-label={
            activeWidget === "chat"
              ? "Close YAHLEE Stylist Concierge"
              : "Open YAHLEE Stylist Concierge"
          }
          aria-expanded={activeWidget === "chat"}
        >
          {activeWidget === "chat" ? (
            <X size={24} />
          ) : (
            <>
              <Sparkles size={24} />
              <span className="yahlee-fab-badge" />
            </>
          )}
          <span className="yahlee-fab-tooltip">Ask YAHLEE Stylist</span>
        </button>
      </aside>
    </>
  );
};

export default FloatingWidgets;
