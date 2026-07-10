# n8n Engineering Guide

> A visual, architecture-first guide to mastering n8n automation. No drag-and-drop tutorials — just deep technical understanding.

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Push to GitHub**
3. **Enable GitHub Pages** in repository settings
4. **Visit** `https://YOUR_USERNAME.github.io/n8n-engineering-guide/`

## 📁 Structure

```
n8n-engineering-guide/
├── index.html          # Main index page with all days
├── css/
│   └── style.css       # Global styles (dark mode, cards, code blocks)
├── js/
│   └── quiz.js         # Interactive quiz system
├── days/
│   ├── day-01.html     # Day 1: Architecture & Installation
│   └── day-02.html     # Day 2: Triggers Deep Dive
└── README.md
```

## 📅 Curriculum

| Day | Topic | Status |
|-----|-------|--------|
| 01 | Architecture & Installation | ✅ Ready |
| 02 | Triggers Deep Dive | ✅ Ready |
| 03 | Data Mapping & Expressions | 🔜 Coming |
| 04 | Error Handling & Debugging | 🔜 Coming |
| 05 | HTTP Requests & APIs | 🔜 Coming |
| 06 | Databases & Storage | 🔜 Coming |
| ... | ... | ... |

## 🎨 Design System

- **Dark Mode** with gradient accents
- **Cards** with colored top borders and hover effects
- **Code Blocks** with syntax highlighting
- **Interactive Quizzes** with instant feedback
- **Sidebar Navigation** with scroll spy
- **Responsive** for mobile and desktop

## 🛠️ How to Add a New Day

1. Copy `days/day-02.html` as template
2. Update content for the new day
3. Add link in `index.html`
4. Commit and push — GitHub Pages updates automatically

## 📖 Topics Covered

### Day 01 — Architecture & Installation
- What n8n is (and what it isn't)
- DAG execution model
- Docker, Cloud, and Self-hosted installation
- Data structure between nodes
- Critical Rule #1: Everything is an array

### Day 02 — Triggers Deep Dive
- 4 Core Trigger Types (Webhook, Cron, App Event, Manual)
- Webhook Architecture inside the engine
- The Most Common Mistake: `$json.body` vs `$json`
- Test URL vs Production URL
- 3 Webhook Response Modes
- Cron Expression Syntax (5 fields)
- Push vs Polling Architectures
- Project: Webhook Order API
- Interactive Quiz (3 questions)

## 📝 License

This educational content is free to use for learning purposes.

---

Built with ❤️ for engineers who want to understand n8n, not just use it.
