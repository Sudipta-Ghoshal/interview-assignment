import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-xl">Page Not Found</p>

      <Link to="/" className="bg-black text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
}
