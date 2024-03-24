import clubData from "../data/clubData"

export const rankPreferences = (major, interests, about) => {
    //Use major for a general look, interests for more specific
    let keywords = []

    //major
    let temp = major
    let index = temp.indexOf(" ")
    while(index != -1) {
        keywords.push(temp.substring(0, index).trim())
        temp = temp.substring(index + 1)
        index = temp.indexOf(" ")
    }

    //interests
    temp = interests
    index = temp.indexOf(" ")
    while(index != -1) {
        keywords.push(temp.substring(0, index).trim())
        temp = temp.substring(index + 1)
        index = temp.indexOf(" ")
    }
    
    //about
    temp = about
    index = temp.indexOf(" ")
    while(index != -1) {
        keywords.push(temp.substring(0, index).trim())
        temp = temp.substring(index + 1)
        index = temp.indexOf(" ")
    }

    //Go through the club data and assign 0 matches
    let matches = new Array(clubData.length)
    
    clubData.forEach((value, i) => {
        let words = []
        
        let temp2 = value
        index = temp2.indexOf(" ")
        while(index != -1) {
            words.push(temp2.substring(0, index).trim())
            temp2 = temp2.substring(index + 1)
            index = temp2.indexOf(" ")
        }

        words.forEach((word, j) => {
            keywords.forEach((kw, k) => {
                if(word === kw)
                    matches[i]++
            })
        })
    })

    //Use matches to determine the ranking order
    iMax = 0;
    for(let j = 0; j < matches.length; j++) {
        for(let i = j+1; i < matches.length; i++) {
            if(value > matches[iMax])
                iMax = i
        }

        let temp3 = clubData[iMax]
        clubData[iMax] = clubData[j]
        clubData[j] = temp3

        let temp4 = matches[iMax]
        matches[iMax] = matches[j]
        matches[j] = temp4
    }
    
}