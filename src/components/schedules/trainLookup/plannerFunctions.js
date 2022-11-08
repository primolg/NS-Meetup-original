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
        + ":00Z" 
    )
}

export function dateToTime(date){
    return date.slice(11,16);
}