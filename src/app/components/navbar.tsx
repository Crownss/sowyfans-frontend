import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-l from-sky-900 to-indigo-800 shadow-lg flex items-center justify-between py-6 px-10">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Sowyfans
        </span>
      </div>
      <div className="flex items-center ml-20">
        <input
          type="text"
          className="px-10 py-2 rounded-2xl shadow-2xl border border-white"
          placeholder="Search Creator"
        />
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-white text-lg font-medium hover:text-sky-300 transition duration-150"
        >
          Home
        </Link>
        <Link
          href="/explore"
          className="text-white text-lg font-medium hover:text-sky-300 transition duration-150"
        >
          Explore
        </Link>
        <Link
          href="/signin"
          className="text-white text-lg font-medium hover:text-sky-300 transition duration-150"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="text-white text-lg font-medium hover:text-indigo-300 transition duration-150 border border-white rounded-full px-4 py-1 ml-2 bg-opacity-20 backdrop-blur-md"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
