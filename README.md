# CompetenC - Hire through Competition

<div align="center">

<!-- Status Badge: Standard blue for "Development" -->
![Status](https://img.shields.io/badge/status-Development-blue)
<!-- Stack Badge: Pipe character is URL-encoded as %7C to render correctly, using a deep purple color close to the project's theme. -->
![Stack](https://img.shields.io/badge/stack-Next.js%2015%20%7C%20Supabase-7c3aed)
<!-- Auth Badge: Uses Google's color for "Google OAuth" with the logo -->
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
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory and populate it with your Supabase credentials:

```env
# Mandatory Supabase connection details
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Used for middleware/server actions
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Used by Next.js/middleware for JWT handling (can be any long random string)
NEXTAUTH_SECRET=a_very_long_random_secret_key
```

### 3. Database & Auth Setup

Follow the detailed instructions in the [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) document to configure:
1.  Supabase Google OAuth Provider.
2.  Run the necessary table creation scripts (`supabase-schema.sql`).
3.  Ensure the Auth Redirect URLs are correctly set for both local development (`http://localhost:3000/auth/callback`) and production.

### 4. Run the Application

```sh
npm run dev
```
The application should now be accessible at `http://localhost:3000`.

---

## 🗺️ Core Application Structure

The application is heavily structured by user role and functional area using Next.js App Router conventions:

| Route Path | Associated User Role | Description |
| :--- | :--- | :--- |
| `/` | Public | Marketing landing page and general navigation. |
| `/login`, `/signup` | Public | Authentication entry points (Google OAuth). |
| `/auth/callback` | Middleware | Handles Supabase redirection and initiates profile completion check. |
| `/profile-completion` | All (Onboarding) | Required step post-signup to select user role (Student/Company). |
| `/student` | Student | Primary dashboard, tracks user metrics (points, rank). |
| `/student/explore` | Student | Directory to view and apply for active challenges. |
| `/company` | Company | Company dashboard overview and key metrics (applicants, hires). |
| `/company/create` | Company | Form for creating and posting new challenges. |
| `/company/applicants` | Company | Management view for reviewing student submissions. |
| `/admin` | Admin | Internal administration dashboard for system oversight. |

### Database Schema (`supabase-schema.sql`)

The backend model is built around three core tables linked by foreign keys and secured with RLS:

1.  **`profiles`**: Stores detailed user information (user type, university, company name).
2.  **`challenges`**: Stores competition details posted by companies.
3.  **`submissions`**: Stores student responses to challenges, including scores and feedback.

---

## 👤 Project Information

| Team Member | Role | GitHub |
| :--- | :--- | :--- |
| **Samiyeel Alim Binaaf** | Project Lead/Developer | [![GitHub](https://img.shields.io/badge/-Pronaaf2k-181717?style=flat&logo=github&logoColor=white)](https://github.com/Pronaaf2k) |
```
