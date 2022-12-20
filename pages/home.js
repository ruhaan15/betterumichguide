import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    const [search, setSearch] = useState("");
    const [clubs, setClubs] = useState();

    // fetch clubs[club_id] from backend from localhost:5000
    useEffect(() => {
        if (!clubs)
            // TODO: figure out how to hit the backend endpoint. Should be something like: "/api/v1/getAllClubs"
            axios
                .get("http://localhost:5000/api/v1/getAllClubs", {
                    params: {
                        limit: 10,
                    },
                })
                .catch((err) => {
                    console.log(err);
                })
                .then((res) => {
                    console.log(res);
                    setClubs(res.data);
                });
    }, []);

    useEffect(() => {
        if (search?.length > 0) {
            axios
                .get("http://localhost:5000/api/v1/searchClubs", {
                    params: {
                        query: search,
                    },
                })
                .then((res) => {
                    console.log(res);
                    setClubs(res.data.results);
                });
        } else {
            axios
                .get("http://localhost:5000/api/v1/getAllClubs", {
                    params: {
                        limit: 10,
                    },
                })
                .catch((err) => {
                    console.log(err);
                })
                .then((res) => {
                    console.log(res);
                    setClubs(res.data);
                });
        }
    }, [search]);

    return (
        <>
            <main className="min-h-full">
                <div className="mt-10 mb-10 px-24">
                    <div className="mx-auto max-w-[900px] min-h-[800px]">
                        <div className="flex h-[55px] items-center rounded-[10px] border-[2px] border-[#DEDEDE] bg-white px-5">
                            {/* <h2 className="text-xl text-[#556069]">Search for any club, organization, or team...</h2> */}
                            <input
                                className="flex-grow border-none  text-xl text-[#00192B] placeholder-[#778087] !outline-none"
                                placeholder="Search for any club, organization, or team..."
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        {/* <hr className="mx-3 mt-4  border border-solid border-[#DEDEDE]" /> */}
                        <div className="mx-0 mt-[10px] flex flex-col gap-y-1">
                            {clubs ? (
                                clubs.map((club, i) => (
                                    <ClubPill key={club.id} club={club} />
                                ))
                            ) : (
                                <h1>Loading...</h1>
                            )}
                        </div>
                    </div>
                </div>
            </main>{" "}
            <div className="sticky bottom-0 z-20 flex h-10 w-full items-center justify-between bg-[#F3F6FC] px-5 text-sm text-[#38526A]">
                <p>
                    A student project. Not affiliated with the University of
                    Michigan.{" "}
                    <a href="" className="underline">
                        Read more.
                    </a>
                </p>
                <a href="">
                    <p className="underline">Legal + Deletion Requests</p>
                </a>
            </div>
        </>
    );
}

export default Home;
