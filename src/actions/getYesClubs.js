import clubData from '../data/clubData';

export const getYesClubs = () => {
    let clubs = []
    for(i = 0; i < clubData.length; i++) {
        console.log(clubData[i])
        if(clubData[i].status == "Like")
            clubs.push(clubData[i])
    }

    return clubs
}