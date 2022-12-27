import Image from "next/image";
import Solar from "../public/Solar.jpeg";
import Verified from "../public/Verified.svg";
import { truncateStr } from "../lib/helpers";
import Link from "next/link";

const ClubPill = ({ club }) => {
    const normal_pill =
        "flex cursor-pointer items-center rounded-md bg-[#F3F6FC] px-3 py-1 text-[#263B4A]";

    return (
        <div className="flex items-center justify-between rounded-2xl py-5 px-2 hover:bg-[#F3F6FC]">
            <div className="flex items-center">
                <Link href={"/clubs/" + club.id}>
                    <div className="relative shrink-0">
                        {club.socialMedia_externalWebsite ? (
                            <div className="absolute -top-2 -right-2 z-10">
                                <Image
                                    src={Verified}
                                    alt="Verified check`"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        ) : null}
                        <Image
                            src={
                                club.profilePicture
                                    ? `https://se-images.campuslabs.com/clink/images/${club.profilePicture}`
                                    : Solar
                            }
                            alt="Club Logo"
                            width={50}
                            height={50}
                            className="rounded"
                        />
                    </div>
                </Link>
                <div className="ml-4 flex flex-col justify-between shrink break-words">
                    <Link href={"/clubs/" + club.id}>
                        <h2 className="mt-0.5 text-lg font-medium leading-5.5 text-[#00192B]">
                            {truncateStr(club.name, 36)}
                        </h2>
                    </Link>
                    <div className="hidden sm:flex font-regular mt-[3px] gap-2 text-sm leading-5.5 text-[#979999]">
                        <h2>100+ members</h2>
                        <h2>·</h2>
                        <h2>Open to Join</h2>
                        <h2>·</h2>
                        <h2>No Dues</h2>
                    </div>
                    <div className="flex sm:hidden shrink break-words">
                        <div className={normal_pill}>
                            {club.categoryNames[0]}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex">
                <div className={normal_pill}>{club.categoryNames[0]}</div>
            </div>
            <Link href={"/clubs/" + club.id}>
                <div className="hidden lg:flex h-8 cursor-pointer items-center rounded-md bg-[#0066FF] px-6 text-[#fff]">
                    <h3 className="text-md font-medium">Learn More</h3>
                </div>
            </Link>
        </div>
    );
};

export default ClubPill;
