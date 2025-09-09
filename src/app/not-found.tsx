import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-sky-800 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold drop-shadow-lg mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-2">Unfortunately!</h2>
        <p className="mb-6 text-lg">
          Looks like you&apos;ve wandered off the Solifans universe
          <br />
          I'll let you go home
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-pink-200 transition duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
