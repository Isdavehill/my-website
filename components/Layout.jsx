import Link from "next/link";
const Year = new Date().getFullYear();

function Layout({ children }) {
    return (
        <>
        <header>
            <logo>
                <Link href="/"></Link>
            </logo>
            <nav>
                <ul className="site-header__nav">
                    <li>
                        <Link href=""></Link>
                    </li>
                    <li>
                        <Link href=""></Link>
                    </li>
                    <li>
                        <Link href=""></Link>
                    </li>
                    <li>
                        <Link href=""></Link>
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