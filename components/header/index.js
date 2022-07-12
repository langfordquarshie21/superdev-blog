import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../button";
import SubscribeNewsletter from "../subscribeNewsletter";
import SearchInput from "../inputs/searchInput";
import HeroBanner from "../heroBanner";
import search from "../../public/assets/svg/search.svg";
import Drawer from "../drawer";
import Nav from "./nav";
import Logo from "../logo";
import MenuButton from "./menuButton";
import Link from "next/link";
import TagTabs from "../tagTabs";

const Header = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute(window.location.pathname);
  }, [route]);

  const HeroBannerElement = () => {
    if (route === "/" || route === "/articles")
      return (
        <section>
          <HeroBanner />
          {/* <SubscribeNewsletter /> */}
          <TagTabs />
        </section>
      );
    return null;
  };

  return (
    <>
      <header className="z-50 top-0 left-0 w-screen">
        <div className="p-5 py-3 max-w-6xl flex items-center justify-between m-auto">
          <Logo />
          <Nav />
          {/* <div className='hidden lg:block'>
                        <SearchInput />
                    </div> */}
          <div className="lg:hidden flex items-center">
            <Link href="/search" passHref>
              <Image src={search} alt="search" />
            </Link>
          </div>
        </div>
      </header>
      <HeroBannerElement />
      {/* <Drawer /> */}
    </>
  );
};

export default Header;
