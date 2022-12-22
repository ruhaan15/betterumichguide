import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import Solar from "../public/Solar.jpeg";
import Verified from "../public/Verified.svg";
import { truncateStr } from "../lib/helpers";

const ClubPill = ({ club }) => {
    let [hover, setHover] = useState(false);
    const normal_wrapper = classNames(
        "static flex h-10 items-center justify-between rounded-2xl py-10 pl-4 pr-5"
    );
    const hover_wrapper = classNames(
        "static flex h-10 items-center justify-between rounded-2xl py-10 pl-4 pr-5 bg-[#F3F6FC] "
    );
    //   const hover_pill = classNames("flex h-7 cursor-pointer items-center rounded-md bg-[#fff] px-3 text-[#263B4A]");
    const normal_pill = classNames(
        "flex h-7 cursor-pointer items-center rounded-md bg-[#F3F6FC] px-3 text-[#263B4A]"
    );
    const hover_pill = normal_pill;

    return (
        <div
            className={hover ? hover_wrapper : normal_wrapper}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            <div className="flex h-[50px] shrink-0 items-center">
                <a href={"/clubs/" + club.id}>
                    <div className="relative h-[50px]">
                        {club.socialMedia_externalWebsite ? (
                            <div className="absolute -top-2 -right-2 z-10">
                                <Image
                                    src={Verified}
                                    alt=""
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
                </a>
                <div className="my-1 ml-4 flex flex-col justify-between">
                    <a href={"/clubs/" + club.id}>
                        <h1 className="mt-0.5 text-lg font-medium leading-5.5 text-[#00192B]">
                            {truncateStr(club.name, 32)}
                        </h1>
                    </a>
                    <div className="font-regular mt-[3px] flex gap-2 text-sm leading-5.5 text-[#979999]">
                        <h2>100+ members</h2>

                        <h2>·</h2>
                        <h2>Open to Join</h2>
                        <h2>·</h2>
                        <h2>No Dues</h2>
                    </div>
                </div>
            </div>
            <div className="flex">
                {/*<div className={hover ? hover_pill : normal_pill}>*/}
                {/*  <h3 className="font-regular text-sm">Project Team</h3>*/}
                {/*</div>*/}
                {/*<div className={hover ? hover_pill : normal_pill}>*/}
                {/*  <h3 className="font-regular text-sm">Engineering</h3>*/}
                {/*</div>*/}
                <div className={hover ? hover_pill : normal_pill}>
                    <h3 className="font-regular text-sm">
                        {club.categoryNames[0]}
                    </h3>
                </div>
            </div>
            <a href={"/clubs/" + club.id}>
                <div className="flex h-8 cursor-pointer items-center rounded-md bg-[#0066FF] px-6 text-[#fff]">
                    <h3 className="text-md font-medium">Learn More</h3>
                </div>
            </a>
        </div>
    );
};

export default ClubPill;
