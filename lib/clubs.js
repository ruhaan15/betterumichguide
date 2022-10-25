import axios from "axios";


export async function getAllClubsData() {
    const clubs = await axios
        .get("http://localhost:5000/api/v1/getAllClubs", {})
        .catch((err) => {
            console.log(err);
        });

    const data = clubs.data;

    return {
        data
    }
}

export async function getSingleClubData(club_id) {
    const club = await axios
        .get(`http://localhost:5000/api/v1/clubs/${club_id}`, {})
        .catch((err) => {
            console.log(err);
        });

    const data = club.data;
    // console.log(data)

    return {
        data
    }
}