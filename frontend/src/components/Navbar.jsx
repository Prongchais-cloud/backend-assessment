import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex h-20 gap-10 justify-end items-center px-10 text-2xl border-b-2">
            <Link to="/">Home</Link>
        </nav>
    );
}