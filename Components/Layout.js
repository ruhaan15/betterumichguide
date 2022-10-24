import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <main>
                <section className="px-4">{children}</section>
            </main>
            <Footer />

        </>
    )
}