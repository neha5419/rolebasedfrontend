import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-800 p-4 w-full">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            to="/login"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Login
          </Link>
        </li>
       
        <li>
          <Link
            to="/register"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Register
          </Link>
          </li>
          <li>
          <Link
            to="/"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
