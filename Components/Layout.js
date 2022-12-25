import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="my-8 mx-4 sm:mx-8 grow">{children}</main>
            <Footer />
        </div>
    );
}
