"use client";

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs font-mono text-[#444]">© 2026 Rajeev Reddy</p>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/redddddyyyyy" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/rajeev-reddy" },
            { label: "Email", href: "mailto:rajeevreddy1009@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs font-mono text-[#444] hover:text-[#C14B5A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
