import classNames from "classnames";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Solar from "../../public/Solar.jpeg";
import Verified from "../../public/Verified.svg";
import {useRouter} from "next/router";
import parse from "html-react-parser"

import {getAllClubsData, getSingleClubData} from "../../lib/clubs";

export default function Club({ club }) {
    // const [club, setClub] = useState([]);

    // console.log(club.data[0])

    // return (
    //     <>
    //         <div>{club.data[0].name}</div>
    //     </>
    // )

    return (
        <>
            <main className="min-h-full">
                <div className="mt-10 mb-10 px-24">
                    <div className="mx-auto max-w-[900px] min-h-[800px]">
                        <div className="mx-0 mt-[10px] flex flex-col gap-y-1">
                            <ClubInfo key={club.id} club={club.data[0]} />
                             {/*<ClubPill key={club.id} club={club} />) : <h1>Loading...</h1>}*/}
                            {/*{clubs ? clubs.map((club, i) => <h1>{club.name}</h1>) : <h1>Loading...</h1>}*/}
                        </div>
                    </div>
                </div>
            </main>{" "}
        </>
    );
}

export const getStaticPaths = async () => {
    const p = await getAllClubsData();
    let data = p.data;
    const paths = data.map((club) => ({
        params: {club_id: (club.id).toString()}
    }))
    // const paths = [{ params: {club_id: "260742"}, }];
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
    // console.log(params.club_id)
    const club = await getSingleClubData(params.club_id);
    return {
        props: {
            club,
        }
    }
}

function truncateStr(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// this will return info about a club
const ClubInfo = ({ club }) => {

    console.log(club)


    return (
            <>
                <div className="flex">
                    <Image
                        src={club.profilePicture ? `https://se-images.campuslabs.com/clink/images/${club.profilePicture}` : Solar}
                        alt="Club Logo"
                        width={100}
                        height={100}
                        className="rounded"
                    />
                    <h1 className="text-[22px] font-medium pl-7 py-2 ">{club.name}</h1>
                </div>

                {
                    parse(club.description)
                }
                {/*<div className="mt-3">{club.description.replace(/<\/?[^>]+(>|$)/g, "")}</div>*/}

            </>
    );
};

// club.shortName ? club.shortName : club.name


