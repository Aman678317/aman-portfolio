/*=============== PORTFOLIO ASSISTANT ===============*/
(() => {
  const launcher = document.getElementById("chat-launcher");
  const panel = document.getElementById("chat-panel");
  const closeButton = document.getElementById("chat-close");
  const log = document.getElementById("chat-log");
  const suggestions = document.getElementById("chat-suggestions");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  if (!launcher || !panel || !closeButton || !log || !suggestions || !form || !input) return;

  const EMAIL = "shandilyaprahaald@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/aman-shandilya-aa30822b3";
  const GITHUB = "https://github.com/Aman678317";
  const GLOBALTALK = "https://globaltalk-ai.vercel.app/";

  const documents = [
    {
      label: "Ethara completion letter",
      href: "assets/docs/ethara-letter.pdf",
    },
    {
      label: "Rajora certificate",
      href: "assets/docs/rajora-package.pdf#page=2",
    },
    {
      label: "Rajora recommendation",
      href: "assets/docs/rajora-package.pdf#page=3",
    },
  ];

  const entries = [
    {
      id: "ethara",
      keys: ["ethara", "ethara ai", "llm post training", "post training", "data preparation", "model evaluation", "evaluation work"],
      text:
        "Aman interned at Ethara AI, where he prepared and evaluated data for LLM post-training workflows. He completed the internship on 01 Oct 2026, and the completion letter is on this site.",
      detail:
        "The work sat upstream of training: cleaning and structuring data, then scoring model outputs against task guidelines. The letter is dated 01 Oct 2026 and opens as issued.",
      links: [{ label: "Open Ethara's letter", href: "assets/docs/ethara-letter.pdf" }],
    },
    {
      id: "rajora",
      keys: ["rajora", "rajora ai", "backend internship", "backend api", "api services", "integration testing"],
      text:
        "At Rajora AI, Aman worked on backend APIs for an AI product and on integration testing, and contributed to AION Bot. Rajora recognised the contribution on 12 Oct 2026 with a certificate and a recommendation.",
      detail:
        "Day to day that meant REST endpoints, integration tests and fixes around AION Bot's task flows. The Rajora package holds both the certificate and the recommendation.",
      links: [
        { label: "Rajora certificate", href: "assets/docs/rajora-package.pdf#page=2" },
        { label: "Rajora recommendation", href: "assets/docs/rajora-package.pdf#page=3" },
      ],
    },
    {
      id: "internships",
      keys: ["internship", "internships", "experience", "work experience", "companies", "where did he work", "career"],
      text:
        "Two AI internships in 2026: Ethara AI, working on LLM post-training data and evaluation, and Rajora AI, building backend APIs for an AI product and contributing to AION Bot. Both have documents on this site.",
      detail:
        "Ethara AI ran to completion on 01 Oct 2026; the Rajora AI recognition is dated 12 Oct 2026. Alongside those, he is building his own product, GlobalTalk AI / TalkFlow.",
      links: [
        { label: "Ethara letter", href: "assets/docs/ethara-letter.pdf" },
        { label: "Rajora certificate", href: "assets/docs/rajora-package.pdf#page=2" },
      ],
    },
    {
      id: "globaltalk",
      keys: ["globaltalk", "global talk", "talkflow", "talk flow", "startup", "video call", "video calling", "translation", "live site", "real time translation"],
      text:
        "GlobalTalk AI / TalkFlow is Aman's startup project: two-person video calling with a real-time translation pipeline. It is live, built with WebRTC and Socket.IO plus FastAPI and Node services.",
      detail:
        "TalkFlow pairs two callers in a WebRTC room, streams audio through the translation pipeline and returns captions, while Socket.IO keeps participant state in sync. The demo film is a short walkthrough.",
      links: [
        { label: "Open the live site", href: GLOBALTALK },
        { label: "Code on GitHub", href: "https://github.com/Aman678317/TalkFlow" },
        { label: "Watch the demo", href: "assets/talkflow-demo.mp4" },
      ],
    },
    {
      id: "aion",
      keys: ["aion", "aion bot", "desktop agent", "desktop native", "os tasks", "agent", "automation"],
      text:
        "AION Bot is Rajora AI's desktop-native agent: it turns plain instructions into operating-system tasks. Aman contributed to it during his internship there, alongside the backend and integration work.",
      detail:
        "The agent plans steps, drives a browser through Playwright and can act on the desktop, but asks for confirmation before risky actions. MCP tools keep task updates flowing back to the app.",
      links: [{ label: "AION Bot repository", href: "https://github.com/rajeevrajora77-lab/aion-bot" }],
    },
    {
      id: "outskill",
      keys: ["outskill", "mastermind", "course", "certification", "training", "generative ai mastermind", "no code"],
      text:
        "In Dec 2025 Aman completed Outskill's Generative AI Mastermind, covering prompt engineering and no-code automation. It is listed under certifications on his CV.",
      links: [{ label: "Open the CV", href: "assets/pdf/Aman-Shandilya-CV.pdf" }],
    },
    {
      id: "skills",
      keys: ["skills", "skill", "stack", "tech", "technology", "technologies", "tools", "python", "javascript", "typescript", "react", "vite", "fastapi", "node", "sql", "mysql", "webrtc", "socket io", "prompt engineering", "nlp", "generative ai"],
      text:
        "AI/ML: Python, LLM post-training, NLP and speech, generative AI, prompt engineering, model evaluation.\nProduct and engineering: JavaScript/TypeScript, React and Vite, FastAPI and Node, WebRTC and Socket.IO, SQL/MySQL, Git and GitHub.",
      detail:
        "His strongest ground is Python and JavaScript, with real LLM evaluation experience from Ethara AI and React/FastAPI delivery from his own projects.",
      links: [{ label: "See the skills section", href: "#skills" }],
    },
    {
      id: "documents",
      keys: ["document", "documents", "certificate", "letter", "letters", "proof", "pdf", "papers", "recommendation", "completion"],
      text:
        "Three documents are on this site, all as issued PDFs: Ethara AI's internship completion letter, plus the Rajora AI certificate and recommendation inside one package. They open in a new tab rather than being embedded as images.",
      detail:
        "The Ethara letter is a single page dated 01 Oct 2026. In the Rajora package, page 2 is the certificate and page 3 is the recommendation, dated 12 Oct 2026.",
      links: documents,
    },
    {
      id: "cv",
      keys: ["cv", "resume", "curriculum vitae", "download"],
      text:
        "His CV is the same PDF as the Download CV button in the hero. It covers the internships, projects, skills and education in one page.",
      links: [{ label: "Open the CV", href: "assets/pdf/Aman-Shandilya-CV.pdf" }],
    },
    {
      id: "projects",
      keys: ["project", "projects", "portfolio", "built", "builds", "work", "work samples", "recent work"],
      text:
        "Current work: GlobalTalk AI / TalkFlow, a live two-person video call with real-time translation; AION Bot, a desktop agent; plus the AI work from his Ethara AI and Rajora AI internships and the Outskill mastermind.",
      links: [
        { label: "GlobalTalk AI live site", href: GLOBALTALK },
        { label: "Browse the work section", href: "#work" },
      ],
    },
    {
      id: "contact",
      keys: ["contact", "email", "mail", "whatsapp", "phone", "number", "reach", "connect", "message", "get in touch", "hire", "available", "availability"],
      text:
        "Email " + EMAIL + " or message +91 85210 27649 on WhatsApp. LinkedIn is the best place for a professional conversation. The contact form on this page opens your email app with the message ready.",
      links: [
        { label: "Email Aman", href: "mailto:" + EMAIL },
        { label: "LinkedIn", href: LINKEDIN },
        { label: "WhatsApp", href: "https://wa.me/918521027649" },
      ],
    },
    {
      id: "linkedin",
      keys: ["linkedin"],
      text: "Aman's LinkedIn profile is linkedin.com/in/aman-shandilya-aa30822b3.",
      links: [{ label: "Open LinkedIn", href: LINKEDIN }],
    },
    {
      id: "github",
      keys: ["github", "repositories", "repos", "source code"],
      text: "His code is on GitHub at github.com/Aman678317, including the TalkFlow repository.",
      links: [{ label: "Open GitHub", href: GITHUB }],
    },
    {
      id: "education",
      keys: ["education", "study", "studying", "college", "bms", "degree", "student", "university", "school"],
      text: "Aman is a BMS student in Mumbai, studying 2025–2028, alongside his AI/ML internships and product work.",
    },
    {
      id: "location",
      keys: ["location", "based", "mumbai", "city", "where does he live", "remote"],
      text: "He is based in Mumbai, India (IST).",
    },
    {
      id: "about",
      keys: ["about", "who is aman", "who is he", "summary", "bio", "background", "introduce", "introduction", "tell me about him", "what does he do", "what does aman do"],
      text:
        "Aman Shandilya is an AI/ML student and builder in Mumbai (BMS, 2025–2028). He has two AI internships, Ethara AI and Rajora AI, and is building GlobalTalk AI / TalkFlow. His work spans LLM data and evaluation, Python backends and React front ends.",
      links: [{ label: "Read the about section", href: "#about" }],
    },
    {
      id: "services",
      keys: ["services", "service", "offer", "what can he do", "help with", "freelance", "capabilities"],
      text:
        "Three areas: AI/LLM engineering (data prep, evaluation, prompt design), AI automation (LangGraph-style workflows, Playwright, MCP tools) and product engineering (WebRTC video, REST APIs, React front ends).",
      detail:
        "The services section lists the specifics for each area, including confirmation steps before an agent takes a sensitive action.",
      links: [{ label: "See services", href: "#services" }],
    },
    {
      id: "assistant",
      keys: ["who are you", "are you a bot", "are you ai", "chatbot", "assistant", "how does this work", "this chat", "what can you do"],
      text:
        "I'm a small on-page assistant with a fixed knowledge base about Aman's work. There is no external AI service behind it — every answer comes from the content on this portfolio.",
    },
    {
      id: "demo",
      keys: ["demo", "film", "video", "watch"],
      text: "There is a short demo film of TalkFlow in the work section.",
      links: [{ label: "Watch the demo", href: "assets/talkflow-demo.mp4" }],
    },
    {
      id: "greeting",
      keys: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "yo", "namaste"],
      text:
        "Hi — ask me about Aman's internships, projects, documents, skills or how to reach him.",
    },
    {
      id: "thanks",
      keys: ["thanks", "thank you", "thx", "bye", "goodbye", "see you"],
      text:
        "Any time. If you want to talk directly, email " + EMAIL + " or message him on LinkedIn.",
      links: [{ label: "LinkedIn", href: LINKEDIN }],
    },
  ];

  const starterPrompts = ["Internships", "GlobalTalk", "Documents", "Contact"];

  const initialMessage =
    "Hi, I'm Aman's portfolio assistant. I can walk you through his internships, projects, documents and skills — or point you to his CV and contact details.";

  const fallback = {
    text:
      "I don't have that on file yet. Try asking about the Ethara AI or Rajora AI internships, GlobalTalk AI, AION Bot, his documents, skills or contact details.",
    links: [{ label: "Email Aman", href: "mailto:" + EMAIL }],
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let isOpen = false;
  let isTyping = false;
  let currentEntry = null;
  let typingBubble = null;

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9@.+ ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function findAnswer(text) {
    const normalized = normalize(text);
    if (!normalized) return null;

    const tokens = normalized.split(" ");
    const isFollowUp =
      tokens.length <= 4 &&
      /^(more|tell me more|details?|elaborate|go on|and more|anything else)$/.test(normalized);

    if (isFollowUp && currentEntry && currentEntry.detail) {
      return { text: currentEntry.detail, links: currentEntry.links };
    }

    let best = null;
    let bestScore = 0;

    entries.forEach((entry) => {
      let score = 0;

      entry.keys.forEach((key) => {
        if (key.includes(" ")) {
          if (normalized.includes(key)) score += 5;
        } else if (tokens.includes(key)) {
          score += 2;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    });

    return bestScore >= 2 ? best : null;
  }

  function addLink(container, link) {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;

    const icon = document.createElement("i");
    icon.className = "bx bx-link-external";
    icon.setAttribute("aria-hidden", "true");
    anchor.appendChild(icon);

    if (/^(https?:|mailto:)/.test(link.href)) {
      anchor.target = "_blank";
      anchor.rel = "noopener";
    }

    container.appendChild(anchor);
  }

  function addMessage(text, who, links) {
    const bubble = document.createElement("div");
    bubble.className = "chat__msg chat__msg--" + who;

    const body = document.createElement("span");
    body.textContent = text;
    bubble.appendChild(body);

    if (links && links.length) {
      const linkList = document.createElement("div");
      linkList.className = "chat__links";
      links.forEach((link) => addLink(linkList, link));
      bubble.appendChild(linkList);
    }

    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
    return bubble;
  }

  function showTyping() {
    const bubble = document.createElement("div");
    bubble.className = "chat__msg chat__msg--bot";
    bubble.setAttribute("aria-hidden", "true");

    const dots = document.createElement("span");
    dots.className = "chat__typing";
    for (let i = 0; i < 3; i += 1) dots.appendChild(document.createElement("span"));

    bubble.appendChild(dots);
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
    return bubble;
  }

  function respond(question) {
    if (isTyping) return;
    isTyping = true;

    addMessage(question, "user");
    input.value = "";
    suggestions.hidden = true;

    const match = findAnswer(question);
    const answer = match || fallback;

    if (match) currentEntry = match;

    typingBubble = showTyping();
    const delay = prefersReducedMotion ? 0 : 520 + Math.random() * 320;

    window.setTimeout(() => {
      if (typingBubble) typingBubble.remove();
      typingBubble = null;
      addMessage(answer.text, "bot", answer.links);
      isTyping = false;
    }, delay);
  }

  function openChat() {
    if (isOpen) return;
    isOpen = true;

    panel.hidden = false;
    panel.classList.add("is-open");
    launcher.setAttribute("aria-expanded", "true");

    if (!log.childElementCount) {
      addMessage(initialMessage, "bot");
    }

    if (window.matchMedia("(pointer: fine)").matches) {
      input.focus();
    }
  }

  function closeChat() {
    if (!isOpen) return;
    isOpen = false;

    panel.classList.remove("is-open");
    panel.hidden = true;
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();

  }

  starterPrompts.forEach((prompt) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chat__suggestion";
    chip.textContent = prompt;
    chip.addEventListener("click", () => {
      respond(prompt);
      if (window.matchMedia("(pointer: fine)").matches) input.focus();
    });
    suggestions.appendChild(chip);
  });

  launcher.addEventListener("click", openChat);
  closeButton.addEventListener("click", closeChat);

  panel.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link && (link.getAttribute("href") || "").startsWith("#")) closeChat();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    respond(question);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) closeChat();
  });
})();
