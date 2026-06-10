# HappyWork Career Path Pitch Deck

Static HTML pitch deck for a Product Design assignment introducing **HappyWork Career Path - Today Growth Companion**.

The concept extends HappyWork's employee-side mobile experience with a Career Path Companion that connects career direction, capability growth, company OKR / KPI focus, calendar work context, feedback, reflection, and visible progress.

## Project Overview

This deck presents a new Career Path feature for employees who want practical clarity about growth. It is framed for Eira, "The Quiet Explorer," a modern knowledge worker who wants to grow but feels overwhelmed by information, fragmented learning, and invisible progress.

The product is intentionally not an OKR tracker, learning course marketplace, or performance monitoring dashboard. It is a supportive daily companion that helps employees understand where they can go, what capabilities they need to build, and what small action they can take today.

## Visual Direction

The presentation uses a HappyWork-inspired SaaS HR style: clean white cards, soft blue and mint surfaces, blue primary accents, fresh green CTAs, rounded components, soft shadows, and a supportive low-stress tone.

The first slide anchors the concept around four connected ideas: career direction, capability growth, calendar work context, and visible progress.

## How to Run Locally

No build step is required.

Open `index.html` directly in a browser, or serve the folder with any static file server.

Example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages Deployment

1. Push this project to a GitHub repository, such as `Vagueslim/BEER` or `happywork-career-path-pitch`.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save the setting.

GitHub Pages will publish the static site from `index.html`.

## Deck Structure

1. Title / Vision
2. The Problem
3. Persona
4. Key Insight
5. Product Solution
6. How It Works
7. Feature Structure
8. Key Screen 1 - Career Overview / Home
9. Key Screen 2 - Goal & Skill Growth
10. Why It Matters

## Navigation

- `ArrowRight` or `Space`: next slide
- `ArrowLeft`: previous slide
- Slide dots: jump to a specific slide

## Files

- `index.html` - editable slide content and deck structure
- `styles.css` - design tokens, responsive layout, mobile mockups, print styles
- `script.js` - slide state, keyboard navigation, progress indicator
- `README.md` - project documentation and deployment notes
