import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-32 text-center">
      <h1 className="font-display text-4xl font-semibold text-[var(--color-navy-800)]">404</h1>
      <p className="mt-3 text-[var(--color-slate)]">This page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block text-[var(--color-gold-600)] font-medium">
        Back to Home
      </Link>
    </div>
  );
}
