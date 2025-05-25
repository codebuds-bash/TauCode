import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-white-700 text-white py-6 px-4 shadow-lg select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-center sm:text-left text-lg font-semibold tracking-wide">
          🎉 Fun project by{" "}
          <span className="text-yellow-400 hover:text-yellow-300 transition-colors font-bold cursor-pointer">
            Dhruv
          </span>{" "}
          and{" "}
          <span className="text-yellow-400 hover:text-yellow-300 transition-colors font-bold cursor-pointer">
            Vishakha
          </span>
        </p>

        <div className="flex space-x-6">
          {/* Social icons */}
          <a
            href="https://github.com/dhruv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dhruv GitHub"
            className="hover:text-yellow-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.754-1.334-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.996.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.927.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.292 0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/vishakha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vishakha Twitter"
            className="hover:text-yellow-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.936 4.936 0 0 0 2.163-2.724 9.868 9.868 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.374 4.482A13.946 13.946 0 0 1 1.67 3.149a4.916 4.916 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085 4.918 4.918 0 0 0 4.588 3.414 9.867 9.867 0 0 1-6.102 2.105c-.396 0-.787-.023-1.17-.068a13.945 13.945 0 0 0 7.548 2.213c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
            </svg>
          </a>

          <a
            href="mailto:contact@funproject.com"
            aria-label="Email contact"
            className="hover:text-yellow-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-yellow-200 select-text">
        &copy; {new Date().getFullYear()} Fun project by Dhruv & Vishakha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
