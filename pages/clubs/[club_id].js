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
    //         <div>{club.data[0}</].namediv>
    //     </>
    // )

    return (
        <>
            <main className="min-h-full">
                <div className="mt-10">
                    <a href={'/clubs'}>
                        <button type="button" class="text-white mt-[10px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>

                        <h2 className="text-base"> Back </h2>
                        </button>
                    </a>
                    <div className="mb-10 px-24">
                        <div className="mx-auto max-w-[900px] min-h-[800px]">
                            <div className="mx-0 mt-[10px] flex flex-col gap-y-1">
                                <ClubInfo key={club.id} club={club.data[0]} />
                                {/*<ClubPill key={club.id} club={club} />) : <h1>Loading...</h1>}*/}
                                {/*{clubs ? clubs.map((club, i) => <h1>{club.name}</h1>) : <h1>Loading...</h1>}*/}
                            </div>
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
    
    //console.log(club)
    

    return (
            <>
                <div className="flex mb-6">
                    <Image
                        src={club.profilePicture ? `https://se-images.campuslabs.com/clink/images/${club.profilePicture}` : Solar}
                        alt="Club Logo"
                        width={100}
                        height={100}
                        className="rounded"
                    />
                    <h1 className="text-[22px] font-medium pl-7 py-2 ">{club.name}</h1>
                    <div className="ml-auto">
                        <div className="mt-6 ">
                            
                            <a href={`mailto:${club.email}`} target="_blank">
                                {/* <img src="images/cancel.png" width="15">< */}
                                <button className="align-middle mx-2 bg-white-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded btn btn-white" > 
                                <img src="http://www.clker.com/cliparts/8/3/1/b/13652250221684996142Email%20Icon.svg.med.png" alt="Email"
                                    width = {40}
                                    height = {40}
                                ></img></button>
                            </a>
                            {/* <button onclick="href">Email</button> */}
                                <a href={club.socialMedia_instagramUrl} target="_blank">
                                    <button className="align-middle mx-2 bg-white-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded btn btn-white">
                                    {/* <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/124px-Instagram_logo_2016.svg.png" alt="Club Logo"
                                        
                                            width={30}
                                            height={30}
                                            className="rounded"
                                        ></img>
                                    </button>
                                </a>
                            <a href={club.socialMedia_externalWebsite} target="_blank">
                                <button className="align-middle mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-8">Website </button>
                            </a>
                        </div>
                    </div>
                    
                </div>

                <div>
                    {parse(club.description)}
                </div>
                <div>
                </div>
                
                {/*<div className="mt-3">{club.description.replace(/<\/?[^>]+(>|$)/g, "")}</div>*/}

            </>
    );
};

// club.shortName ? club.shortName : club.name


