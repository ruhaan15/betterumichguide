const NavBar = () => {
    return (
        <>
            <div className="flex items-center justify-between border-b-2 border-[#f5f5f5] bg-white px-6 py-3 ">
                <div className="flex items-center gap-2">
                    <h1 className="text-[25px] font-bold text-[#FFCB03]">M</h1>
                    <a href="/"><h1 className="text-[22px] font-medium">UMich.guide</h1></a>
                </div>
                <div className="flex h-10 items-center justify-between gap-8 text-[#323232]">
                    <a href="/about"><h3 className="text-md cursor-pointer">About us</h3></a>
                    <h3 className="text-md cursor-pointer">Write a club review</h3>
                    <h3 className="text-md cursor-pointer">I&apos;m a club organizer</h3>
                    <div className="flex h-8 cursor-pointer items-center rounded-md bg-[#F3F6FC] px-6 text-[#323232]">
                        <h3 className="text-md font-medium">Log in</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar;