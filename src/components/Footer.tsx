import React from 'react';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-mono">
          © {year} Tharindu Disnaka Gamage
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="/cv.pdf"
            download
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            CV
          </a>
          <span className="text-muted-foreground text-sm">·</span>
          <span className="text-muted-foreground text-sm">Privacy</span>
        </div>
      </div>
    </footer>
  );
}