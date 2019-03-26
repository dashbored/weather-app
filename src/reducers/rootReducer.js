const initState = {
    forecast: [
        {   id: 1, 
            name: "Stockholm", 
            date: "2019-03-26",
            maxtemp: "4.4",
            mintemp: "-0.6",
            temp: "3.0", 
            condition: { 
                text: "Partly cloudy",
                icon: "//cdn.apixu.com/weather/64x64/day/116.png"
                }
         },
         {  id: 2, 
            name: "Stockholm", 
            date: "2019-03-27",
            maxtemp: "4.4",
            mintemp: "-0.6",
            temp: "3.0", 
            condition: { 
                text: "Partly cloudy",
                icon: "//cdn.apixu.com/weather/64x64/day/116.png"
               }
        },
        {   id: 3, 
            name: "Stockholm", 
            date: "2019-03-28",
            maxtemp: "4.4",
            mintemp: "-0.6",
            temp: "3.0", 
            condition: { 
                text: "Partly cloudy",
                icon: "//cdn.apixu.com/weather/64x64/day/116.png"
               }
        },
        {   id: 4, 
            name: "Stockholm", 
            date: "2019-03-29",
            maxtemp: "4.4",
            mintemp: "-0.6",
            temp: "3.0", 
            condition: { 
                text: "Partly cloudy",
                icon: "//cdn.apixu.com/weather/64x64/day/116.png"
               }
        },
        {   id: 5, 
            name: "Stockholm", 
            date: "2019-03-30",
            maxtemp: "4.4",
            mintemp: "-0.6",
            temp: "3.0", 
            condition: { 
                text: "Partly cloudy",
                icon: "//cdn.apixu.com/weather/64x64/day/116.png"
               }
        }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;