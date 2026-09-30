import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ShoppingBag,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppWidget";

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Namaste! 🙏 Welcome to YAHLEE Ethnic Boutique. I am your personal styling & shopping concierge. How may I assist you today?",
    links: [
      { label: "Explore Collections", to: "/collections" },
      { label: "Women's Ethnic", to: "/women" },
      { label: "Family Sets", to: "/collections" },
    ],
    time: "Just now",
  },
];

const quickPills = [
  "👗 Recommend Festive Wear",
  "📏 Size Guide & Fit",
  "🚚 Shipping & Delivery",
  "🔄 Returns & Exchanges",
  "✨ Custom Stitching",
  "📍 Boutique Details",
];

const getBotResponse = (input) => {
  const query = input.toLowerCase();

  if (
    query.includes("festive") ||
    query.includes("wedding") ||
    query.includes("party") ||
    query.includes("celebration") ||
    query.includes("recommend") ||
    query.includes("outfit")
  ) {
    return {
      text: "For weddings and festive celebrations, we recommend our royal silk kurtas, designer lehengas, and coordinated family sets crafted with authentic zari work and heritage weaves.",
      links: [
        { label: "View Festive Collections", to: "/collections" },
        { label: "Shop Women's Ethnic", to: "/women" },
        { label: "Shop Men's Kurta Sets", to: "/men" },
      ],
    };
  }

  if (
    query.includes("size") ||
    query.includes("fit") ||
    query.includes("measurement") ||
    query.includes("chart") ||
    query.includes("custom") ||
    query.includes("stitch")
  ) {
    return {
      text: "Our outfits follow standard Indian sizing (XS to 3XL). For made-to-measure orders and blouse/kurta customizations, our in-house master tailors ensure the perfect drape.",
      links: [
        { label: "Read FAQs & Fit Info", to: "/faq" },
        { label: "Contact for Custom Fit", to: "/contact" },
      ],
    };
  }

  if (
    query.includes("delivery") ||
    query.includes("shipping") ||
    query.includes("track") ||
    query.includes("dispatch") ||
    query.includes("time")
  ) {
    return {
      text: "We offer complimentary standard shipping across India on orders over ₹1999. In-stock orders are dispatched within 24-48 hours and arrive in 3-5 business days. Express shipping is also available!",
      links: [
        { label: "Track or Inquire Order", to: "/contact" },
        { label: "Shipping Policy (FAQ)", to: "/faq" },
      ],
    };
  }

  if (
    query.includes("return") ||
    query.includes("exchange") ||
    query.includes("refund") ||
    query.includes("policy")
  ) {
    return {
      text: "We offer hassle-free 7-day exchanges on unworn items with original tags intact. Need a different size or style? Our concierge will assist you quickly.",
      links: [
        { label: "Exchange Guidelines", to: "/faq" },
        { label: "Contact Support", to: "/contact" },
      ],
    };
  }

  if (
    query.includes("fabric") ||
    query.includes("material") ||
    query.includes("silk") ||
    query.includes("cotton") ||
    query.includes("care") ||
    query.includes("wash")
  ) {
    return {
      text: "YAHLEE uses hand-selected pure mulberry silks, chanderi, tussar, mulmul cottons, and rich organzas. We recommend dry cleaning for our embroidered and silk garments to preserve their luster.",
      links: [
        { label: "Our Story & Craftsmanship", to: "/our-story" },
        { label: "Browse Pure Silks", to: "/women" },
      ],
    };
  }

  if (
    query.includes("kid") ||
    query.includes("boy") ||
    query.includes("girl") ||
    query.includes("children") ||
    query.includes("family")
  ) {
    return {
      text: "We take pride in our 'Together in Tradition' family collections! Coordinated father-son kurta sets and mother-daughter ethnic wear ensure stunning family photographs.",
      links: [
        { label: "Shop Boys", to: "/boys" },
        { label: "Shop Girls", to: "/girls" },
        { label: "Family Lookbook", to: "/collections" },
      ],
    };
  }

  if (
    query.includes("store") ||
    query.includes("location") ||
    query.includes("address") ||
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone")
  ) {
    return {
      text: "You can reach us directly at yahleefamilysalonboutique@gmail.com or call/WhatsApp us at +91 87548 55222. Our styling team is happy to assist you Monday through Saturday (10 AM - 8 PM IST).",
      links: [
        { label: "Visit Contact Page", to: "/contact" },
        { label: "Our Boutique Story", to: "/our-story" },
      ],
    };
  }

  // Default smart fallback
  return {
    text: "Thank you for reaching out! Our styling team is here to assist with everything from finding the right silhouette to delivery timelines and custom styling.",
    links: [
      { label: "Explore Collections", to: "/collections" },
      { label: "Read FAQs", to: "/faq" },
      { label: "Contact Concierge", to: "/contact" },
    ],
  };
};

const ChatBox = ({ isOpen, onClose, onSwitchToWhatsApp }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Realistic bot response delay
    setTimeout(() => {
      const responseData = getBotResponse(query);
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: responseData.text,
        links: responseData.links,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
    setIsTyping(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="yahlee-floating-window yahlee-chat-window"
      role="dialog"
      aria-label="YAHLEE Boutique Stylist Concierge"
    >
      {/* Header */}
      <div className="yahlee-chat-header">
        <div className="yahlee-chat-title-group">
          <div className="yahlee-chat-avatar">
            <Sparkles size={20} />
          </div>
          <div className="yahlee-chat-info">
            <h4>YAHLEE Concierge</h4>
            <p>
              <span className="yahlee-chat-pulse-dot" />
              Stylist & Support • Online
            </p>
          </div>
        </div>

        <div className="yahlee-chat-actions">
          <button
            type="button"
            onClick={handleResetChat}
            className="yahlee-chat-header-btn"
            title="Reset Conversation"
            aria-label="Reset Conversation"
          >
            <RotateCcw size={15} />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="yahlee-chat-header-btn"
            title="Close Chat"
            aria-label="Close Chat"
          >
            <X size={17} />
          </button>
        </div>
      </div>

      {/* Quick Inquiry Chips */}
      <div className="yahlee-chat-chips-wrap">
        <div className="yahlee-chat-chips-label">Popular Inquiries</div>
        <div className="yahlee-chat-chips-list">
          {quickPills.map((pill, i) => (
            <button
              key={i}
              type="button"
              className="yahlee-chat-chip"
              onClick={() => handleSendMessage(pill)}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Stream */}
      <div className="yahlee-chat-messages">
        <div className="yahlee-chat-divider">
          <span>Today</span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`yahlee-message-row ${
              msg.sender === "user" ? "yahlee-message-user" : "yahlee-message-bot"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="yahlee-msg-avatar">
                <Sparkles size={14} />
              </div>
            )}

            <div className="yahlee-msg-content">
              <div className="yahlee-msg-bubble">
                <p>{msg.text}</p>

                {msg.links && msg.links.length > 0 && (
                  <div className="yahlee-msg-links">
                    {msg.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        onClick={onClose}
                        className="yahlee-msg-link-btn"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={12} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <span className="yahlee-msg-time">{msg.time}</span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="yahlee-message-row yahlee-message-bot">
            <div className="yahlee-msg-avatar">
              <Sparkles size={14} />
            </div>
            <div className="yahlee-typing-indicator">
              <span className="yahlee-typing-dot" />
              <span className="yahlee-typing-dot" />
              <span className="yahlee-typing-dot" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar & WhatsApp Switcher */}
      <div className="yahlee-chat-footer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="yahlee-chat-form"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about outfits, size, delivery..."
            className="yahlee-chat-input"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="yahlee-chat-send-btn"
            aria-label="Send message"
          >
            <Send size={15} />
          </button>
        </form>

        <div className="yahlee-chat-bridge">
          <span>Prefer personal assistance?</span>
          <button
            type="button"
            onClick={onSwitchToWhatsApp}
            className="yahlee-chat-bridge-btn"
          >
            <WhatsAppIcon size={14} color="#128c7e" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
