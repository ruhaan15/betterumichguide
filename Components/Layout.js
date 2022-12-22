import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div className="m-8">{children}</div>
            <Footer />
        </>
    );
}
