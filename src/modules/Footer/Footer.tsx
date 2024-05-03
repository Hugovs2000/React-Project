import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";

export default function Footer({ padding }: { padding: string }) {
  return (
    <>
      <footer
        id="footer"
        className={`footer items-center gap-4 bg-zinc-900 text-slate-50 ${padding}`}
      >
        <aside className="grid-flow-col items-center">
          <RiPagesLine className="size-10" />
          <p>Copyright © 2024 - All rights reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <IoLogoTwitter className="size-10" />
          <IoLogoYoutube className="size-10" />
          <IoLogoFacebook className="size-10" />
        </nav>
      </footer>
    </>
  );
}
