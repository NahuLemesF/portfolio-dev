// components/Navbar.jsx
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-4 flex gap-4 bg-zinc-900">
      <Link to="/" className="hover:text-amber-400">Home</Link>
      <Link to="/projects" className="hover:text-amber-400">Projects</Link>
      <Link to="/about" className="hover:text-amber-400">About</Link>
    </nav>
  );
};
