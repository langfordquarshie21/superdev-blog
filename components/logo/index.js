import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="flex items-center cursor-pointer hover:opacity-50 transition">
          <div className="scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF822D"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9.417 0h6.958l-3.375 8h7l-13 16 4.375-11h-7.375z" />
            </svg>
          </div>
          <b className="text-[#fff] lg:text-2xl lg:block ml-2 hidden">superdev</b>
        </div>
      </Link>
    </>
  );
};

export default Logo;
