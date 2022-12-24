import Link from "next/link";

const Footer = () => {
    return (
        <div className="fixed bottom-0 z-20 flex gap-3 w-full items-center justify-between bg-[#F3F6FC] p-5 text-sm text-[#38526A]">
            <p>
                A student project. Not affiliated with the University of
                Michigan.
                <Link href="/privacyPolicy"> Privacy Notice</Link>
            </p>
            <Link href="/termsOfUse">
                <p className="underline">Legal + Deletion Requests</p>
            </Link>
        </div>
    );
};

export default Footer;
