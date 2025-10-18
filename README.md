# CompetenC - Hire through Competition

<div align="center">

<!-- Status Badge: This is a placeholder, as the exact URL for 'Development' might vary -->
![Status](https://img.shields.io/badge/status-Development-blue)
<!-- Stack Badge: Note: The exact color code 'FF4500' might not map perfectly to the screenshot's purple/orange gradient, but it uses the requested technology stack -->
![Stack](https://img.shields.io/badge/stack-Next.js%2015%20%7C%20Supabase-7c3aed)
<!-- Auth Badge: Uses Google's color code for recognition -->
![Authentication](https://img.shields.io/badge/authentication-Google_OAuth-4285F4?logo=google)

> **Revolutionizing recruitment by leveraging real-world challenges to identify and evaluate top talent.**  
> CompetenC is a full-stack platform built on the Next.js App Router and Supabase, designed to connect companies with skilled students through gamified competition.

---

## 💡 Key Highlights

This project implements a secure, role-based hiring platform focusing on modern authentication flows and modular dashboard design.

- **Role-Based Access Control (RBAC):** Dedicated, secure dashboards for Students, Companies, and Admins enforced via Next.js Middleware.
- **Modern Authentication:** Seamless sign-in and sign-up using **Google OAuth** via Supabase.
- **Onboarding Flow:** Mandatory `/profile-completion` step post-signup to classify users (Student/Company) and capture essential profile data.
- **Competition Lifecycle:** Tools for companies to create, manage, and track applicants for custom challenges (Case Study, Hackathon, etc.).
- **Gamified Student Experience:** Student dashboards track points, rank, rewards, and manage submissions across all active challenges.
- **Aesthetic UI:** Utilizes Shadcn/UI components and a modern "Glassmorphism" aesthetic built with Tailwind CSS and Framer Motion.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | `Next.js 15`, `React 19`, `TypeScript` | App Router architecture for robust routing and server components. |
| **Styling** | `Tailwind CSS`, `Shadcn-UI` | Highly customizable, utility-first styling with a component library focus. |
| **State/UX** | `Framer Motion`, `Sonner` | Smooth page transitions and modern toast notifications. |
| **Backend/DB** | `Supabase` | PostgreSQL database, Server/Client utilities, and Row Level Security (RLS). |
| **Authentication** | `Supabase Auth` | Handles session management and Google OAuth login/signup flow. |
| **Routing** | `Next.js Middleware` | Enforces RLS and redirects users based on authentication and profile status. |

---

## 🚀 Getting Started

The platform relies on **Supabase** for database, authentication, and user management.

### Prerequisites

1.  Node.js (LTS/Current)
2.  npm (or compatible package manager)

### 1. Project Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL> competenc-nextjs

# Navigate to the project directory
cd competenc-nextjs

# Install dependencies
npm install
