const Footer = () => {
    return (
        <div className="fixed bottom-0 z-20 flex h-10 w-full items-center justify-between bg-[#F3F6FC] px-5 text-sm text-[#38526A]">
            <p>
                A student project. Not affiliated with the University of Michigan.{" "}
                <a href="/privacyPolicy" className="underline">
                    Privacy notice.
                </a>
            </p>
            <a href="/termsOfUse">
                <p className="underline">Legal + Deletion Requests</p>
            </a>
        </div>
    )
}

export default Footer;