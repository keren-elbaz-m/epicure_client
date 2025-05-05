import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <Link href="/restaurants">Restaurants</Link>|
            <Link href="/chefs">Chefs</Link>
        </>
    );
  }