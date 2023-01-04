import axios from "axios";
import { useEffect, useState } from "react";
import ClubPill from "../../components/ClubPill";

export default function Home() {
    const [search, setSearch] = useState("");
    const [clubs, setClubs] = useState([]);
    const [page, setPage] = useState(0);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const filters = ["Academic/Honor Societies", "Activism", "Business/Entrepreneurship", "Creative/Performing Arts",
                        "Cultural/Ethnic", "Department", "Environmental", "Gender/Sexuality", "Governance",
                        "Graduate/Professional", "Health & Wellness", "Media & Creative Writing", "Religious/Spiritual",
                        "Science/Technology/Engineering", "Service/Service Learning", "Social Fraternity/Sorority"];

    useEffect(() => {
        // console.log("the filters are " + selectedFilters)
        console.log(search, selectedFilters)
        if (search !== "") {
            axios
                .get(`${API_URL}/api/v1/clubs/searchClubs`, {
                    params: {
                        query: search,
                        filters: selectedFilters
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
                        filters: selectedFilters
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
    }, [search, page, selectedFilters]);

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
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                               <div>
                                  {filters.map(filter => (
                                      <button className="items-center mt-3 justify-between" onClick={() => {
                                          if (selectedFilters.includes(filter)) {
                                              setSelectedFilters(selectedFilters.filter(f => f !== filter));
                                          } else {
                                              setSelectedFilters([...selectedFilters, filter]);
                                          }
                                      }}>
                                          <div className="">
                                              {/*TODO: this can prob be refactored into something cleaner*/}
                                              <p className={selectedFilters.includes(filter) ? 'flex h-7 cursor-pointer items-center rounded-md bg-[#0066FF] px-3 text-[#263B4A] mx-3' : 'flex h-7 cursor-pointer items-center rounded-md bg-[#F3F6FC] px-3 text-[#263B4A] mx-3'}>
                                                  {filter}
                                              </p>
                                          </div>
                                      </button>
                                  ))}
                                </div>
                        </div>
                        {/* <hr className="mx-3 mt-4  border border-solid border-[#DEDEDE]" /> */}
                        <div className="mx-0 mt-[10px] flex flex-col gap-y-1">
                            {clubs !== [] ? (
                                clubs.map((club) => (
                                    <ClubPill key={club.id} club={club} />
                                ))
                            ) : (
                                <h1>Loading...</h1>
                            )}
                        </div>
                        {search === "" ? (
                            <div className="flex justify-center mt-8 mb-16">
                                <button
                                    onClick={() => setPage((prev) => prev + 1)}
                                    className="flex h-8 cursor-pointer items-center rounded-md bg-[#0066FF] px-6 text-[#fff]"
                                >
                                    <h3 className="text-md font-medium">
                                        Load More
                                    </h3>
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </main>{" "}
        </>
    );
}
