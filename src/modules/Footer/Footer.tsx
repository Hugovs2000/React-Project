import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
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
        <nav className="flex grid-flow-col items-center gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/Hugovs2000/React-Project.git">
            <IoLogoGithub className="size-8" />
          </a>
          <a href="https://www.linkedin.com/in/hugo-van-schalkwyk-312180248/">
            <IoLogoLinkedin className="size-8" />
          </a>
        </nav>
      </footer>
    </>
  );
}
