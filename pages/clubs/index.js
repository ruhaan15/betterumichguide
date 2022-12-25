import axios from "axios";
import { useEffect, useState } from "react";
import ClubPill from "../../components/ClubPill";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
    const [search, setSearch] = useState("");
    const [clubs, setClubs] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (search !== "") {
            axios
                .get(`${API_URL}/api/v1/clubs/searchClubs`, {
                    params: {
                        query: search,
                    },
                })
                .then((res) => {
                    setClubs(res.data.results);
                    setPage(0);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .get(`${API_URL}/api/v1/clubs/getAllClubs`, {
                    params: {
                        page: page,
                        size: 10,
                    },
                })
                .then((res) => {
                    setClubs((prev) => {
                        if (page === 0) {
                            return res.data;
                        }
                        return [...prev, ...res.data];
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [search, page]);

    return (
        <div className="">
            <div className="flex h-[55px] items-center rounded-[10px] border-[2px] border-[#DEDEDE] bg-white px-5">
                <input
                    className="flex-grow border-none text-xl text-[#00192B] placeholder-[#778087] !outline-none"
                    placeholder="Search for any club, organization, or team..."
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <div className=" mt-[10px] flex flex-col gap-1">
                {clubs !== [] ? (
                    clubs.map((club) => <ClubPill key={club.id} club={club} />)
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
            {search === "" ? (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        className="flex cursor-pointer items-center rounded-md bg-[#0066FF] px-6 py-1 text-[#fff]"
                    >
                        <h3 className="text-md font-medium">Load More</h3>
                    </button>
                </div>
            ) : null}
        </div>
    );
}
