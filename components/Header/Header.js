import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import styles from "../../styles/index.module.css";

const headerLink =
  "text-textColor hover:text-btnColor transition-all duration-100 font-montserrat font-medium leading-5 tracking-wider";

export const Header = () => {
  return (
    <header>
      <div className="bg-white py-5 fixed w-full top-0">
        <div
          className={`${styles.container} flex items-center justify-between`}
        >
          <Image
            src="/icons/site-logo.svg"
            alt="site-logo"
            width={186}
            height={38}
          />
          <nav className="space-x-10">
            <Link href="#">
              <a className={headerLink} target="_blank">
                Products
              </a>
            </Link>
            <Link href="#">
              <a className={headerLink} target="_blank">
                Features
              </a>
            </Link>
            <Link href="#">
              <a className={headerLink} target="_blank">
                Pricing
              </a>
            </Link>
            <Link href="#">
              <a className={headerLink} target="_blank">
                Clients
              </a>
            </Link>
            <Link href="#">
              <a className={headerLink} target="_blank">
                Resources
              </a>
            </Link>
            <Link href="#">
              <a className={headerLink} target="_blank">
                Contacts
              </a>
            </Link>
          </nav>
          <Button />
        </div>
      </div>
    </header>
  );
};
