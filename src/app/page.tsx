import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <header className="xl:border-b">
        <nav className="hidden xl:flex justify-between items-center w-[80%] mx-auto py-1">
          <ul className="flex items-center justify-between gap-1">
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                About us
              </Link>
            </li>
            <span className="bg-[#7E7E7E] h-[8px] rounded w-[1px] mx-2" />
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                My account
              </Link>
            </li>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                Wishlist
              </Link>
            </li>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                Order tracking
              </Link>
            </li>
          </ul>

          <p className="text-xs text-[#7E7E7E]">
            100% Secure delivery without contacting the courier
          </p>
          <div className="flex items-center justify-between gap-1">
            <p className="text-xs text-[#7E7E7E]">
              Need help? Call Us: <span>+1800 900</span>
            </p>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <div>
              <p className="text-xs text-[#7E7E7E]">English</p>
              {/* // TODO: add chevron */}
            </div>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <div>
              <p className="text-xs text-[#7E7E7E]">USD</p>
              {/* // TODO: add chevron */}
            </div>
          </div>
        </nav>
        <nav></nav>
      </header>
    </>
  );
}
