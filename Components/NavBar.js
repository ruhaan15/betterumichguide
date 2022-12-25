import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex gap-2 items-center justify-between border-b-2 border-[#f5f5f5] bg-white px-6 py-3">
            <Link href="/clubs">
                <div className="flex items-center gap-2 cursor-pointer">
                    <h1 className="text-[25px] font-bold text-[#FFCB03]">M</h1>
                    <h1 className="text-[22px] font-medium">UMich.guide</h1>
                </div>
            </Link>
            <div className="flex items-center justify-between gap-8 text-[#323232]">
                <Link href="/about">
                    <div className="flex cursor-pointer items-center rounded-md bg-[#F3F6FC] px-4 py-2 text-[#323232]">
                        <h3 className="text-md font-medium text-center">
                            About us
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default NavBar;
