import Link from "next/link";
const Year = new Date().getFullYear();

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
            {children}
        </main>
        <footer className="site-footer">
            <p>Copyright &copy; {Year} Dave Hill.</p>
        </footer>
        </>
    );
}



export default Layout;