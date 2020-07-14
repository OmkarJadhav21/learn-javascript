// ++++++++++++++++++ Date +++++++++++++++++++
// month index in date always stars from zero

let today = new Date();  //current date,time and region

let customDate = new Date(2020, 05, 20, 00, 01, 00); //indian/zonal

//new Date(year, month, date, hours, minutes, seconds, ms);
console.log('Created Date', today, customDate);

//getDate - returns 'date' in the current/given date string
console.log('DATE', today.getDate());

//getDay - returns 'day' in the current/given week;(7)
console.log('DAY', today.getDay());
// sunday - 0 th day
// monday - 1st day in week
// tuesday - 2
// wednesday - 3
// thursday - 4
// friday - 5
// saturday - 6

// getFullYear - returns year from the provided date
console.log('YEAR', today.getFullYear());

// Hours - returns Hours in 24H format from the provided date(24)
console.log('Hours', today.getHours());

// getMilliseconds - returns MilliSeconds from the provided date(1000)
console.log('MS', today.getMilliseconds());

// getMinutes - returns Minutes from the provided date(60)
console.log('MIN', today.getMinutes());

// getMonth - returns Month-1 from the provided date(12)
console.log('MONTH', today.getMonth(), today.getMonth() + 1);  //Always make addition of 1 in current month, beacuse index start from 0

// getSeconds - returns Seconds from the provided date(60)
console.log('SEC', today.getSeconds());

// getTime - returns time epoch from the provided date()
console.log('Time epoch', today.getTime());

// getTimezoneOffset - returns timeZoneOffset from the provided date() 
// = A time 'offset' is an amount of time subtracted from or added to Coordinated Universal Time (UTC) time to get the current civil time
console.log('Time Zone OFFSET', today.getTimezoneOffset());

// getUTCDate - returns UTC Date from the provided date()
console.log('UTC Date', customDate.getDate(), customDate.getUTCDate());

// getUTCDay - returns UTC Day from the provided date()
console.log('UTC Day', customDate.getDay(), customDate.getUTCDay());

// getUTCFullYear - returns UTC FullYear from the provided date()
let lastYear = new Date(2021, 01, 01, 00, 01, 59, 210);  //2021 1 Jan 12.01 am
console.log('UTC Year', lastYear.getFullYear(), lastYear.getUTCFullYear());

// getUTCHours - returns UTC Hours from the provided date()
console.log('UTC Hours', lastYear.getUTCHours(), lastYear.getHours());

// getUTCMinutes - returns UTC Minutes from the provided date()
console.log('UTC Minutes', lastYear.getUTCMinutes(), lastYear.getMinutes());

// getUTCSeconds - returns UTC Seconds from the provided date()
console.log('UTC Seconds', lastYear.getUTCSeconds(), lastYear.getSeconds());

// getUTCMilliseconds - returns UTC Milli. from the provided date()
console.log('UTC MS', lastYear.getUTCMilliseconds(), lastYear.getMilliseconds());

// getVarDate - returns getVarDate from the provided date()
console.log('Var Date', today.getVarDate);  //unsuppoerted in browser






let localDate = new Date(2020, 10, 20, 12, 58, 30, 700);   //created new date--> Fri Nov 20 2020 12:58:30 GMT+0530 (India Standard Time)

// setDate - set 'date' parameter and returns long value(Epoch)
console.log('set Date-->', localDate.setDate(25), localDate);

// setFullYear - set 'month' parameter and returns long value(Epoch)
console.log('set Months-->', localDate.setMonth(05), localDate);  //change month
console.log('set Months-->', localDate.setMonth(05, 12), localDate); //change month and date

// setFullYear - set 'fullYear' parameter and returns long value(Epoch)
console.log('set Full year-->', localDate.setFullYear(2019), localDate);

// setHours - set 'hours' parameter and returns long value(Epoch)
console.log('set Hours-->', localDate.setHours(14), localDate);  //set only H
console.log('set Hours-->', localDate.setHours(14, 21, 34, 344), localDate);  //set H,m,s,ms

// setMinutes - set 'minutes' parameter and returns long value(Epoch)
console.log('set Minutes-->', localDate.setMinutes(45), localDate);  //set M
console.log('set Minutes-->', localDate.setMinutes(45, 21, 111), localDate);  //set M,S,MS

// setSeconds - set 'seconds' parameter and returns long value(Epoch)
console.log('set Seconds-->', localDate.setSeconds(34), localDate);  //set S
console.log('set Seconds-->', localDate.setSeconds(35, 288), localDate);  //set S,MS

// setMilliseconds - set 'ms' parameter and returns long value(Epoch)
console.log('set MS-->', localDate.setMilliseconds(900), localDate);  //set MS

// setMilliseconds - set 'ms' parameter and returns long value(Epoch)
console.log('set Time-->', localDate.setTime(today.getTime()), localDate);  //set MS



// setUTCDate - set 'UTCDate' parameter and returns long value(Epoch)
console.log('set setUTCDate-->', localDate.setUTCDate(12), localDate);  //set UTCDate

// setUTCMonth - set 'UTCMonth' parameter and returns long value(Epoch)
console.log('set setUTCMonth-->', localDate.setUTCMonth(01), localDate);  //set UTCMonth

// setUTCFullYear - set 'UTCFullYear' parameter and returns long value(Epoch)
console.log('set setUTCFullYear-->', localDate.setUTCFullYear(2011), localDate);  //set UTCFullYear

// setUTCHours - set 'UTCHours' parameter and returns long value(Epoch)
console.log('set setUTCHours-->', localDate.setUTCHours(21), localDate);  //set UTCHours

// setUTCMinutes - set 'UTCMinutes' parameter and returns long value(Epoch)
console.log('set setUTCMinutes-->', localDate.setUTCMinutes(22), localDate);  //set UTCMinutes

// setUTCSeconds - set 'UTCSeconds' parameter and returns long value(Epoch)
console.log('set setUTCSeconds-->', localDate.setUTCSeconds(44), localDate);  //set UTCSeconds

// setUTCMilliseconds - set 'UTCMilliseconds' parameter and returns long value(Epoch)
console.log('set setUTCMilliseconds-->', localDate.setUTCMilliseconds(434), localDate);  //set UTCMilliseconds

// toDateString - returns date formatted string
console.log('set toDateString-->', localDate.toDateString());  // Sun Feb 13 2011

// toISOString - returns ISO string from date
console.log('set toISOString-->', localDate.toISOString());  //2011-02-12T21:22:44.434Z

// toJSON - returns JSON string from date
console.log('set toJSON-->', localDate.toJSON());  //2011-02-12T21:22:44.434Z

// toLocaleDateString - returns Local date string for particular region

//1. day:
// The representation of the day.
// Possible values are "numeric", "2-digit".
//2. weekday:
// The representation of the weekday.
// Possible values are "narrow", "short", "long".
//3. year:
// The representation of the year.
// Possible values are "numeric", "2-digit".
//4. month:
// The representation of the month.
// Possible values are "numeric", "2-digit", "narrow", "short", "long".
//5. hour:
// The representation of the hour.
// Possible values are "numeric", "2-digit".
//6. minute: The representation of the minute.
// Possible values are "numeric", "2-digit".
//7. second:
// The representation of the second.
// Possible values are "numeric", 2-digit"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit', hour12: false };
console.log('set toLocaleDateString-->', today.toLocaleDateString('ar-EG', options));  //2011-02-12T21:22:44.434Z
console.log('HINDI toLocaleDateString-->', new Date(2012,1,3).toLocaleDateString('hi', options));  //2011-02-12T21:22:44.434Z


// toLocaleString - returns local date&time in string for particular region
console.log('set toLocaleString-->', localDate.toLocaleString());  // 13/02/2011, 02:52:44  --- Date & time
console.log('set toLocaleDateString-->', localDate.toLocaleDateString());  // 13/02/2011  -- Date

// toLocaleString - returns Local date string for particular region
console.log('set toLocaleString-->', localDate.toLocaleString('th', options));  // 13/02/2011, 02:52:44  --- Date & time

// toLocaleTimeString - returns Local Time string for provided date with options
console.log('set toLocaleTimeString-->', today.toLocaleTimeString('ja', options));  //

// toTimeString - returns Full time for the date
console.log('set toTimeString-->', localDate.toTimeString());  // 02:52:44 GMT+0530 (India Standard Time)

// toUTCString - returns UTC date string
console.log(' toUTCString-->', localDate.toUTCString());  // Sat, 12 Feb 2011 21:22:44 GMT

// toLocaleDateString - returns Local date string for particular region
console.log('valueOf Vs gettime-->', localDate.valueOf(), localDate.getTime());  // Sat, 12 Feb 2011 21:22:44 GMT

// Create new date from epoch
const dateFromEpochLong = new Date(localDate.getTime())
console.log('dateFromEpochLong', dateFromEpochLong);
