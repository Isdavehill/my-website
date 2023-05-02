import Link from "next/link";
const Year = new Date().getFullYear();
import { FaHeart } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

function Layout({ children }) {
    return (
        <>
        <header className="site-header">
            <logo>
                <Link href="/">Dave Hill</Link>
            </logo>
            <nav>
                <ul className="site-header__nav">
                    <li>
                        <Link href="">Journey</Link>
                    </li>
                    <li>
                        <Link href="">Thoughts</Link>
                    </li>
                    <li>
                        <Link href="">Nerd Stuff</Link>
                    </li>
                    <li>
                        <Link href="">Jasper</Link>
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