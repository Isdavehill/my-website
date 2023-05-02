import Link from "next/link";
const Year = new Date().getFullYear();
import { FaCat, FaHeart } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbMoodNerd } from "react-icons/tb";
import { TfiThought } from "react-icons/tfi";
import { GiJourney } from "react-icons/gi";

function Layout({ children }) {
    return (
        <>
        <header className="site-header">
            <div className="logo">
                <Link href="/">Dave Hill</Link>
            </div>
            <nav>
                <ul className="site-header__nav">
                    <li>
                        <Link href="">Journey <GiJourney role="img" /></Link>
                    </li>
                    <li>
                        <Link href="">Thoughts <TfiThought role="img" /></Link>
                    </li>
                    <li>
                        <Link href="">Nerd Stuff <TbMoodNerd role="img" /></Link>
                    </li>
                    <li>
                        <Link href="">Jasper <FaCat role="img" /></Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <div className="container">
                {children}
            </div>
        </main>
        <footer className="site-footer">
            <p>Copyright &copy; {Year} Dave Hill.</p>
            <p className="site-footer__made">Built with <span title="Love" className="love"><FaHeart role="img" /></span> using <span title="Next.js" className="next"><SiNextdotjs  role="img" /></span></p>
        </footer>
        </>
    );
}



export default Layout;