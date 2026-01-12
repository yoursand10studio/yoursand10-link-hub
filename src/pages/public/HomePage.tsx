import React from 'react';

interface LinkItem {
  id: string;
  title: string;
  username?: string;
  url: string;
  icon: React.ReactNode;
  color?: string;
}

const links: LinkItem[] = [
  {
    id: '1',
    title: 'TikTok',
    username: '@yoursand10studio',
    url: 'https://www.tiktok.com/@yoursand10studio',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: 'bg-black hover:bg-slate-800',
  },
  {
    id: '2',
    title: 'Instagram',
    username: '@yoursand10studio',
    url: 'https://www.instagram.com/yoursand10studio',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.011-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: 'bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90',
  },
  {
    id: '3',
    title: 'X (Twitter)',
    username: '@yoursand10',
    url: 'https://x.com/yoursand10',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'bg-black hover:bg-slate-900',
  },
  {
    id: '4',
    title: 'Line Official',
    username: 'ID: yoursand10studio',
    url: 'https://line.me/ti/p/w3pb5f6rKQ',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21.5 10.6c0-4.6-4.9-8.4-10.9-8.4-6.1 0-10.9 3.8-10.9 8.4 0 4.1 3.6 7.6 8.5 8.2.3 0 .7.1 1.1.3.3.2.7.9.8 1.4 0 0 .2 1.1.1 1.4-.1.4-.4 1.6-1.7 1 4.7-2.6 6.8-5.3 6.8-5.3 4.2-1.9 6.2-4.5 6.2-7z" />
      </svg>
    ),
    color: 'bg-[#06C755] hover:bg-[#05b34c]',
  },
  {
    id: '5',
    title: 'Email',
    username: 'yoursand10percent@gmail.com',
    url: 'mailto:yoursand10percent@gmail.com',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
    color: 'bg-[#EA4335] hover:bg-[#D33426]',
  },
];

import logoImage from '../../assets/image/Logo.webp';

const HomePage: React.FC = () => {
  return (
    <div className="font-outfit relative min-h-screen overflow-hidden bg-linear-to-br from-rose-100 via-purple-50 to-orange-50 text-slate-800">
      {/* Background Effects */}
      {/* GPU-optimized background blobs with reduced blur for mobile performance */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-400/20 rounded-full blur-3xl md:blur-[80px] mix-blend-multiply will-change-transform" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-purple-400/20 rounded-full blur-3xl md:blur-[80px] mix-blend-multiply will-change-transform" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-8 supports-[min-height:100dvh]:min-h-dvh sm:px-6 sm:py-12">
        {/* Profile Section */}
        <div className="animate-fade-in-down mb-8 text-center">
          <div className="relative mx-auto mb-4 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-transparent shadow-xl shadow-pink-500/20">
            <img src={logoImage} alt="Yours & 10 Logo" className="h-full w-full object-contain" />
          </div>

          <h1 className="mb-1 text-2xl font-bold tracking-wide text-slate-900">
            Yours & 10 | Studio
          </h1>
          <p className="mb-4 text-sm font-medium text-pink-600 italic">
            Crafting memories into websites
          </p>
          <p className="mx-auto max-w-[320px] text-sm leading-relaxed font-light text-slate-600">
            รับทำเว็บไซต์เซอร์ไพรส์แฟน <br />
            วันครบรอบ 💐 | วันเกิด | วันสำคัญ ✨ <br />
            รวมถึง Portfolio | Custom Web 💌
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full flex-1 space-y-4">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex items-center p-4 rounded-xl 
                transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10
                ${link.color ? `${link.color} text-white` : 'bg-white/95 hover:bg-white text-slate-700 border border-white/80 hover:border-pink-300 shadow-sm'}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`mr-4 transition-colors ${link.color ? 'text-white/90 group-hover:text-white' : 'text-pink-500'}`}
              >
                {link.icon}
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <span
                  className={`truncate font-medium ${link.color ? 'text-white/95' : 'text-slate-800'}`}
                >
                  {link.title}
                </span>
                {link.username && (
                  <span
                    className={`truncate text-xs font-light ${link.color ? 'text-white/70 group-hover:text-white/90' : 'text-slate-500'}`}
                  >
                    {link.username}
                  </span>
                )}
              </div>
              <div
                className={`absolute right-4 opacity-0 transition-opacity group-hover:opacity-100 ${link.color ? 'text-white' : 'text-slate-400'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Yours & 10 Studio. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
