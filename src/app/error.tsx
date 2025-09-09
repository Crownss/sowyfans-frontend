"use client"

import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-sky-800 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold drop-shadow-lg mb-4 animate-pulse duration-500">
          500
        </h1>
        <h2 className="text-2xl font-bold mb-2">
          Whoops! Something went wrong
        </h2>
        <p className="mb-6 text-lg">
          Our server is having a little meltdown
          <br />
          But don&apos;t worry, we&apos;re on it!
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-pink-600 font-semibold rounded-full shadow-lg hover:bg-indigo-300 transition duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
