import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className="m-8">{children}</main>
            <Footer />
        </>
    );
}
