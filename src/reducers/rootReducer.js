const initState = {
    error: null,
    favourites: "",
    api_key: "bc298bc4bfb24b0881d85430192603",
    location: {
        name: "Stockholm",
        region: "Stockholms Lan",
        country: "Sweden",
        lat: 59.33,
        lon: 18.05,
        tz_id: "Europe/Stockholm",
        localtime_epoch: 1553623131,
        localtime: "2019-03-26 18:58"
    },
    "current": {
        "last_updated_epoch": 1553622312,
        "last_updated": "2019-03-26 18:45",
        "temp_c": 3.0,
        "temp_f": 37.4,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.apixu.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 6.9,
        "wind_kph": 11.2,
        "wind_degree": 280,
        "wind_dir": "W",
        "pressure_mb": 1017.0,
        "pressure_in": 30.5,
        "precip_mm": 0.2,
        "precip_in": 0.01,
        "humidity": 65,
        "cloud": 0,
        "feelslike_c": 0.0,
        "feelslike_f": 32.0,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.0,
        "gust_mph": 8.9,
        "gust_kph": 14.4
    },
    "forecast": {
        "forecastday": [
            {
                "date": "2019-03-26",
                "date_epoch": 1553558400,
                "day": {
                    "maxtemp_c": 4.6,
                    "maxtemp_f": 40.3,
                    "mintemp_c": -0.6,
                    "mintemp_f": 30.9,
                    "avgtemp_c": 2.1,
                    "avgtemp_f": 35.7,
                    "maxwind_mph": 14.5,
                    "maxwind_kph": 23.4,
                    "totalprecip_mm": 1.0,
                    "totalprecip_in": 0.04,
                    "avgvis_km": 16.6,
                    "avgvis_miles": 10.0,
                    "avghumidity": 63.0,
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.apixu.com/weather/64x64/day/176.png",
                        "code": 1063
                    },
                    "uv": 1.4
                },
                "astro": {
                    "sunrise": "05:33 AM",
                    "sunset": "06:15 PM",
                    "moonrise": "12:26 AM",
                    "moonset": "08:00 AM"
                }
            },
            {
                "date": "2019-03-27",
                "date_epoch": 1553644800,
                "day": {
                    "maxtemp_c": 10.1,
                    "maxtemp_f": 50.2,
                    "mintemp_c": 0.2,
                    "mintemp_f": 32.4,
                    "avgtemp_c": 5.1,
                    "avgtemp_f": 41.2,
                    "maxwind_mph": 6.7,
                    "maxwind_kph": 10.8,
                    "totalprecip_mm": 0.0,
                    "totalprecip_in": 0.0,
                    "avgvis_km": 20.0,
                    "avgvis_miles": 12.0,
                    "avghumidity": 66.0,
                    "condition": {
                        "text": "Partly cloudy",
                        "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                        "code": 1003
                    },
                    "uv": 2.6
                },
                "astro": {
                    "sunrise": "05:30 AM",
                    "sunset": "06:18 PM",
                    "moonrise": "01:41 AM",
                    "moonset": "08:31 AM"
                }
            },
            {
                "date": "2019-03-28",
                "date_epoch": 1553731200,
                "day": {
                    "maxtemp_c": 13.5,
                    "maxtemp_f": 56.3,
                    "mintemp_c": 4.0,
                    "mintemp_f": 39.2,
                    "avgtemp_c": 8.5,
                    "avgtemp_f": 47.3,
                    "maxwind_mph": 10.7,
                    "maxwind_kph": 17.3,
                    "totalprecip_mm": 0.0,
                    "totalprecip_in": 0.0,
                    "avgvis_km": 18.1,
                    "avgvis_miles": 11.0,
                    "avghumidity": 68.0,
                    "condition": {
                        "text": "Partly cloudy",
                        "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                        "code": 1003
                    },
                    "uv": 2.2
                },
                "astro": {
                    "sunrise": "05:27 AM",
                    "sunset": "06:20 PM",
                    "moonrise": "02:43 AM",
                    "moonset": "09:14 AM"
                }
            },
            {
                "date": "2019-03-29",
                "date_epoch": 1553817600,
                "day": {
                    "maxtemp_c": 14.0,
                    "maxtemp_f": 57.2,
                    "mintemp_c": 6.9,
                    "mintemp_f": 44.4,
                    "avgtemp_c": 10.1,
                    "avgtemp_f": 50.2,
                    "maxwind_mph": 17.4,
                    "maxwind_kph": 28.1,
                    "totalprecip_mm": 0.0,
                    "totalprecip_in": 0.0,
                    "avgvis_km": 17.8,
                    "avgvis_miles": 11.0,
                    "avghumidity": 59.0,
                    "condition": {
                        "text": "Partly cloudy",
                        "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                        "code": 1003
                    },
                    "uv": 2.5
                },
                "astro": {
                    "sunrise": "05:24 AM",
                    "sunset": "06:22 PM",
                    "moonrise": "03:33 AM",
                    "moonset": "10:07 AM"
                }
            },
            {
                "date": "2019-03-30",
                "date_epoch": 1553904000,
                "day": {
                    "maxtemp_c": 10.8,
                    "maxtemp_f": 51.4,
                    "mintemp_c": 5.8,
                    "mintemp_f": 42.4,
                    "avgtemp_c": 8.0,
                    "avgtemp_f": 46.4,
                    "maxwind_mph": 15.9,
                    "maxwind_kph": 25.6,
                    "totalprecip_mm": 0.6,
                    "totalprecip_in": 0.02,
                    "avgvis_km": 18.4,
                    "avgvis_miles": 11.0,
                    "avghumidity": 61.0,
                    "condition": {
                        "text": "Moderate rain at times",
                        "icon": "//cdn.apixu.com/weather/64x64/day/299.png",
                        "code": 1186
                    },
                    "uv": 2.4
                },
                "astro": {
                    "sunrise": "05:21 AM",
                    "sunset": "06:25 PM",
                    "moonrise": "04:10 AM",
                    "moonset": "11:11 AM"
                }
            }
        ]
    }
}

const rootReducer = (state = initState, action) => {
    if (action.type === "UPDATE") {
        return {
            ...state,
            location: action.weatherState.location,
            current: action.weatherState.current,
            forecast: action.weatherState.forecast
        }
    } else if (action.type === "UPDATE_FAVOURITES") {
        return {
            ...state,
            favourites: action.favourites
        }
        
    }
    return state;
}

export default rootReducer;