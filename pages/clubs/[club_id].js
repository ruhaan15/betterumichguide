import Image from "next/image";
import Solar from "../../public/Solar.jpeg";
import parse from "html-react-parser";
import Gmail from "../../public/gmail.png";
import Instagram from "../../public/insta.png";
import Web from "../../public/web.png";
import { getAllClubsData, getSingleClubData } from "../../lib/clubs";
import Link from "next/link";

export default function Club({ club }) {
    return (
        <>
            <Link href={"/clubs"}>
                <button
                    type="button"
                    className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-8"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                    </svg>
                    <h2 className="text-base"> Back </h2>
                </button>
            </Link>
            <ClubInfo key={club.id} club={club.data[0]} />
        </>
    );
}

export const getStaticPaths = async () => {
    const p = await getAllClubsData();
    let data = p.data;
    const paths = data.map((club) => ({
        params: { club_id: club.id.toString() },
    }));
    // const paths = [{ params: {club_id: "260742"}, }];
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    // console.log(params.club_id)
    const club = await getSingleClubData(params.club_id);
    return {
        props: {
            club,
        },
    };
};

// this will return info about a club
const ClubInfo = ({ club }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row mb-6 items-center justify-between">
                <div className="flex items-center justify-center gap-4">
                    <div className="shrink-0">
                        <Image
                            src={
                                club.profilePicture
                                    ? `https://se-images.campuslabs.com/clink/images/${club.profilePicture}`
                                    : Solar
                            }
                            alt="Club Logo"
                            width={100}
                            height={100}
                            className="rounded"
                        />
                    </div>
                    <h1 className="text-[22px] font-medium">{club.name}</h1>
                </div>
                <div className="mt-6">
                    <a
                        href={`mailto:${club.email}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="align-middle mx-2 bg-white-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded btn btn-white">
                            <Image
                                src={Gmail}
                                alt="Email"
                                width={30}
                                height={30}
                            />
                        </button>
                    </a>
                    <a
                        href={club.socialMedia_instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="align-middle mx-2 bg-white-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded btn btn-white">
                            <Image
                                src={Instagram}
                                alt="Instagram"
                                width={30}
                                height={30}
                                className="rounded"
                            />
                        </button>
                    </a>
                    <a
                        href={club.socialMedia_externalWebsite}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="align-middle mx-2 bg-white-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded btn btn-white">
                            <Image
                                src={Web}
                                alt="Website"
                                width={30}
                                height={30}
                                className="rounded"
                            />
                        </button>
                    </a>
                </div>
            </div>
            <div>{parse(club.description || "")}</div>
            <div className="flex justify-center mt-4">
                <iframe
                    src={`${
                        club.socialMedia_instagramUrl.slice(-1) === "/"
                            ? club.socialMedia_instagramUrl
                            : club.socialMedia_instagramUrl + "/"
                    }embed`}
                    width="640"
                    height="640"
                    allowtransparency="true"
                ></iframe>
            </div>
        </>
    );
};
