import classNames from "classnames";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Solar from "../public/Solar.jpeg";
import Verified from "../public/Verified.svg";

export default function Home() {
  const [search, setSearch] = useState("");
  const [clubs, setClubs] = useState();

  // fetch clubs from backend from localhost:5000
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
  //
  // useEffect(() => {
  //   if (search?.length > 0) {
  //     axios
  //       .get("https://umichguide-server.0hq.repl.co/api/v1/searchClubs", {
  //         params: {
  //           query: search,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         setClubs(res.data.results);
  //       });
  //   } else {
  //     axios
  //       .get("https://umichguide-server.0hq.repl.co/api/v1/getAllClubs", {
  //         params: {
  //           limit: 10,
  //         },
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         setClubs(res.data);
  //       });
  //   }
  // }, [search]);

  return (
    <>
      <main className="min-h-full">
        <div className="flex items-center justify-between border-b-2 border-[#f5f5f5] bg-white px-6 py-3 ">
          <div className="flex items-center gap-2">
            <h1 className="text-[25px] font-bold text-[#FFCB03]">M</h1>
            <h1 className="text-[22px] font-medium">UMich.guide</h1>
          </div>
          <div className="flex h-10 items-center justify-between gap-8 text-[#323232]">
            <h3 className="text-md cursor-pointer">About us</h3>
            <h3 className="text-md cursor-pointer">Write a club review</h3>
            <h3 className="text-md cursor-pointer">I&apos;m a club organizer</h3>
            <div className="flex h-8 cursor-pointer items-center rounded-md bg-[#F3F6FC] px-6 text-[#323232]">
              <h3 className="text-md font-medium">Log in</h3>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10 px-24">
          <div className="mx-auto max-w-[900px] min-h-[800px]">
            <div className="flex h-[55px] items-center rounded-[10px] border-[2px] border-[#DEDEDE] bg-white px-5">
              {/* <h2 className="text-xl text-[#556069]">Search for any club, organization, or team...</h2> */}
              <input
                className="flex-grow border-none  text-xl text-[#00192B] placeholder-[#778087] !outline-none 
              "
                placeholder="Search for any club, organization, or team..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* <hr className="mx-3 mt-4  border border-solid border-[#DEDEDE]" /> */}
            <div className="mx-0 mt-[10px] flex flex-col gap-y-1">
              {clubs ? clubs.map((club, i) => <ClubPill key={club.id} club={club} />) : <h1>Loading...</h1>}
            </div>
          </div>
        </div>
      </main>{" "}
      <div className="sticky bottom-0 z-20 flex h-10 w-full items-center justify-between bg-[#F3F6FC] px-5 text-sm text-[#38526A]">
        <p>
          A student project. Not affiliated with the University of Michigan.{" "}
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

function truncateStr(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const ClubPill = ({ club }) => {
  console.log(club);
  let [hover, setHover] = useState(false);
  const normal_wrapper = classNames("static flex h-10 items-center justify-between rounded-2xl py-10 pl-4 pr-5");
  const hover_wrapper = classNames("static flex h-10 items-center justify-between rounded-2xl py-10 pl-4 pr-5 bg-[#F3F6FC] ");
  //   const hover_pill = classNames("flex h-7 cursor-pointer items-center rounded-md bg-[#fff] px-3 text-[#263B4A]");
  const normal_pill = classNames("flex h-7 cursor-pointer items-center rounded-md bg-[#F3F6FC] px-3 text-[#263B4A]");
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
        <div className="relative h-[50px]">
          {club.socialMedia_externalWebsite ? (
            <div className="absolute -top-2 -right-2 z-10">
              <Image src={Verified} alt="" width={25} height={25} />
            </div>
          ) : null}
          <Image
            src={club.profilePicture ? `https://se-images.campuslabs.com/clink/images/${club.profilePicture}` : Solar}
            alt="Club Logo"
            width={50}
            height={50}
            className="rounded"
          />
        </div>
        <div className="my-1 ml-4 flex flex-col justify-between">
          <h1 className="mt-0.5 text-lg font-medium leading-5.5 text-[#00192B]">{truncateStr(club.name, 32)}</h1>
          <div className="font-regular mt-[3px] flex gap-2 text-sm leading-5.5 text-[#979999]">
            <h2>100+ members</h2>

            <h2>·</h2>
            <h2>Open to Join</h2>
            <h2>·</h2>
            <h2>No Dues</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className={hover ? hover_pill : normal_pill}>
          <h3 className="font-regular text-sm">Project Team</h3>
        </div>
        <div className={hover ? hover_pill : normal_pill}>
          <h3 className="font-regular text-sm">Engineering</h3>
        </div>
        <div className={hover ? hover_pill : normal_pill}>
          <h3 className="font-regular text-sm">Social</h3>
        </div>
      </div>
      <div className="flex h-8 cursor-pointer items-center rounded-md bg-[#0066FF] px-6 text-[#fff]">
        <h3 className="text-md font-medium">Join</h3>
      </div>
    </div>
  );
};

// club.shortName ? club.shortName : club.name
