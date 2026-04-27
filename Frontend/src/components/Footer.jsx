import { Link } from "react-router-dom";
import logo from "../assets/logo-2.png";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-300 dark:border-gray-700 backdrop-blur-md bg-white/30 dark:bg-black/30">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/*BRAND*/}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <img src={logo} alt="logo" className="w-15 h-10 hover:scale-105 transition" />
            EpicBlogs ✨
          </h2>
          <p className="mt-2 text-sm opacity-70">
            A modern platform to share stories, ideas and creativity with the world — where stories become epic.
          </p>
        </div>

        {/*NAVIGATION*/}
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm opacity-80">
            <li>
              <Link
                to="/"
                className="hover:underline"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="hover:underline"
                onClick={() => window.scrollTo(0, 0)}
              >
                Create Blog
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:underline"
                onClick={() => window.scrollTo(0, 0)}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/*SOCIAL*/}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm opacity-80">
            <li>
              <a
                href="https://github.com/arshadibrahim882"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sheik-arshad-ibrahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*BOTTOM*/}
      <div className="text-center text-xs opacity-60 pb-5">
        © 2026 | Created by <strong>Sheik Arshad Ibrahim</strong>
      </div>
    </footer>
  );
}