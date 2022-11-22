import { startTransition } from "react"

//func returns an array of each quarter of the hour in a day military time
function timeTables () {
    let arr = []
    for (let i = 0; i < 24; i++){
        let currentHr = i.toString().length > 1 ? i : "0" + i
        arr.push(currentHr + ":00", currentHr + ":15", currentHr + ":30", currentHr + ":45")
    }
    return arr
}

export const timesArray = timeTables()

//months to num for api call.
export const monthsToNum = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
}

//converts js internal Date() time to military time
export function  minToHrString (time) {
    const hours = (time / 60);
    const rhours = Math.floor(time / 60);
    const mins = Math.round((hours - rhours) * 60);
    return (rhours + ':' + (mins.toString().length > 1 ? mins : "0" + mins))
}

//converts date to RFC3339 time string
export function timeSorter(date, time){
    return  (
        date.toString().slice(11,15) 
        + "-" + monthsToNum[date.toString().slice(4,7)] 
        + "-" + date.toString().slice(8, 10)
        + "T" + time
        + ":0100Z" 
    )
}

//takes in js Date() and returns time string (ex: 12:00)
export function dateToTime(date){
    return date.slice(11,16);
}

//takes in js Date() and returns time Number (ex: 1200)
export function dateToTimeNum(date){
    return Number(date.slice(11,13) + date.slice(14,16))
}

//takes in trip legs and returns an object containing two arrays, 1st containing arrival, destination, 
// or transfer stations, and the second returning in between stops.
export function stationSorter(legs){
    const mainStops = [];
    const sideStops = [];
    for (const singleLeg in legs){
        const leg = legs[singleLeg].stops;
        const sideStopLeg = [];
        for (let i = 0; i < leg.length - 1; i++){
            if (i === 0){
                mainStops.push(leg[i]);
            } else {
                sideStopLeg.push(leg[i]);
            }
        }
        sideStops.push(sideStopLeg);
    }
    mainStops.push(legs[legs.length - 1].stops[legs[legs.length - 1].stops.length - 1]);
    return {"mainStops": mainStops, "sideStops":sideStops};
}

//takes in locations api response and converts into array with relevant info
export function listLocations(locations){
    const locationsArray = [];
    for (const loc in locations){
        if (locations[loc].type === "station-retail"){
            locationsArray.unshift({
                name: locations[loc].name,
                lng: locations[loc].locations[0].lng,
                lat: locations[loc].locations[0].lat,
                type: "retail"
            })
        } else if (locations[loc].type === "stationfacility"){
            locationsArray.push({
                name: locations[loc].name,
                lng: locations[loc].locations[0].lng,
                lat: locations[loc].locations[0].lat,
                type: "NS-service"
            })
        }
    }
    //consider adding alphabetical sorting by name?
    return locationsArray;
}


