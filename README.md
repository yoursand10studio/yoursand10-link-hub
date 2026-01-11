<div align="center">

# 🚀 Yours & 10 | Web Starter Template

### The Official Web Development Kit for Yours & 10 Studio

**Yours & 10 | Studio รับทำเว็บไซต์เซอร์ไพรส์แฟน
วันครบรอบ 💐 | วันเกิด | วันสำคัญ ✨**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🛠️ Tech Stack

| Category       | Technology                 | Version          |
| -------------- | -------------------------- | ---------------- |
| **Core**       | React + Vite (TS + SWC)    | v19.2.0 / v7.2.4 |
| **Styling**    | Tailwind CSS               | v4.1.18          |
| **Routing**    | React Router DOM           | v7.12.0          |
| **Utilities**  | clsx + tailwind-merge      | Latest           |
| **Linting**    | ESLint + Prettier          | v9.39+           |
| **Icons**      | Lucide React / React Icons | Recommended      |
| **Animations** | Framer Motion              | Recommended      |

---

## 📂 Project Structure

โครงสร้างที่ออกแบบมาเพื่อความยืดหยุ่นและการขยายตัวของธุรกิจ:

```
yours10-web-template/
├── 📁 public/              # Static assets (favicon, etc.)
├── 📁 src/
│   ├── 📁 assets/          # Images, fonts, SVGs
│   │   ├── 📁 fonts/       # Custom fonts
│   │   └── 📁 images/      # Image files
│   ├── 📁 components/      # React components
│   │   ├── 📁 common/      # Shared/Reusable components
│   │   ├── 📁 features/    # Feature-specific components
│   │   └── 📁 ui/          # UI primitives (Button, Input, etc.)
│   ├── 📁 constants/       # App constants & configurations
│   ├── 📁 hooks/           # Custom React hooks
│   ├── 📁 layouts/         # Layout components (MainLayout, etc.)
│   ├── 📁 pages/           # Page components
│   │   ├── 📁 admin/       # Admin/Dashboard pages
│   │   └── 📁 public/      # Public-facing pages
│   ├── 📁 routes/          # App routing configuration
│   ├── 📁 services/        # API services
│   ├── 📁 types/           # TypeScript type definitions
│   ├── 📁 utils/           # Utility functions (cn.ts, etc.)
│   ├── 📄 index.css        # Global styles & Tailwind
│   └── 📄 main.tsx         # App entry point
├── 📄 vite.config.ts       # Vite configuration
├── 📄 tsconfig.json        # TypeScript configuration
├── 📄 eslint.config.js     # ESLint configuration
├── 📄 .prettierrc          # Prettier configuration
└── 📄 package.json         # Dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
# Clone this template
git clone https://github.com/yours-and-10/yours10-web-template.git

# Navigate to project
cd yours10-web-template

# Install dependencies
npm install
```

### 2. Development

```bash
# Start development server
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:5173](http://localhost:5173)

---

## 📜 Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | 🔥 เริ่มต้นเซิร์ฟเวอร์พัฒนา (Hot Reload) |
| `npm run build`   | 📦 Build สำหรับ Production               |
| `npm run preview` | 👁️ Preview Production Build              |
| `npm run lint`    | 🔍 ตรวจสอบ Code Quality ด้วย ESLint      |
| `npm run format`  | ✨ Format Code ด้วย Prettier             |

---

## ✨ Features

- ⚡ **Vite 7** - Lightning-fast development with SWC
- 🔷 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🛣️ **React Router v7** - Client-side routing
- 🧹 **ESLint + Prettier** - Code quality & formatting
- 📁 **Path Aliases** - Clean imports with `@/`

---

## 🔧 Path Aliases

Template นี้ใช้ path alias `@/` สำหรับ import ที่สะอาดขึ้น:

```tsx
// ❌ Before
import { Button } from '../../../components/ui/Button';

// ✅ After
import { Button } from '@/components/ui/Button';
```

---

## 📦 Recommended Extensions (VS Code)

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Importer
- Error Lens

---

<div align="center">

## 👨‍💻 Developed by Yours & 10

**Owner:** Punnatthon (Aom)

📧 [yoursand10percent@gmail.com](mailto:yoursand10percent@gmail.com)

🐙 [github.com/yours-and-10](https://github.com/yours-and-10)

---

_"Crafting memories into websites"_

**© 2026 Yours & 10 Studio. All rights reserved.**

</div>
