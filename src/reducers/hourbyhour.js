const initialState = {
  id: "50.43,30.52",
  vt1hourlyForecast: {
    processTime: ["2016-10-06T16:00:00+0300", "2016-10-06T17:00:00+0300", "2016-10-06T18:00:00+0300", "2016-10-06T19:00:00+0300", "2016-10-06T20:00:00+0300", "2016-10-06T21:00:00+0300", "2016-10-06T22:00:00+0300", "2016-10-06T23:00:00+0300", "2016-10-07T00:00:00+0300", "2016-10-07T01:00:00+0300", "2016-10-07T02:00:00+0300", "2016-10-07T03:00:00+0300", "2016-10-07T04:00:00+0300", "2016-10-07T05:00:00+0300", "2016-10-07T06:00:00+0300", "2016-10-07T07:00:00+0300", "2016-10-07T08:00:00+0300", "2016-10-07T09:00:00+0300", "2016-10-07T10:00:00+0300", "2016-10-07T11:00:00+0300", "2016-10-07T12:00:00+0300", "2016-10-07T13:00:00+0300", "2016-10-07T14:00:00+0300", "2016-10-07T15:00:00+0300", "2016-10-07T16:00:00+0300", "2016-10-07T17:00:00+0300", "2016-10-07T18:00:00+0300", "2016-10-07T19:00:00+0300", "2016-10-07T20:00:00+0300", "2016-10-07T21:00:00+0300", "2016-10-07T22:00:00+0300", "2016-10-07T23:00:00+0300", "2016-10-08T00:00:00+0300", "2016-10-08T01:00:00+0300", "2016-10-08T02:00:00+0300", "2016-10-08T03:00:00+0300", "2016-10-08T04:00:00+0300", "2016-10-08T05:00:00+0300", "2016-10-08T06:00:00+0300", "2016-10-08T07:00:00+0300", "2016-10-08T08:00:00+0300", "2016-10-08T09:00:00+0300", "2016-10-08T10:00:00+0300", "2016-10-08T11:00:00+0300", "2016-10-08T12:00:00+0300", "2016-10-08T13:00:00+0300", "2016-10-08T14:00:00+0300", "2016-10-08T15:00:00+0300"],
    temperature: [12, 12, 11, 9, 9, 9, 8, 7, 7, 7, 7, 6, 6, 5, 5, 5, 6, 8, 10, 12, 13, 13, 14, 13, 13, 12, 12, 11, 10, 9, 8, 8, 7, 7, 6, 5, 5, 4, 4, 5, 6, 6, 7, 9, 9, 9, 9, 9],
    precipPct: [0, 0, 0, 0, 0, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 7, 13, 9, 5, 36, 36, 37, 3, 3, 4, 37, 43, 49, 24, 24, 24, 21, 21, 21, 8, 9, 10, 10, 9, 9, 39, 50, 61, 91, 92, 92, 97],
    precipType: ["rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "precip", "precip", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain", "rain"],
    uvIndex: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
    icon: [28, 28, 30, 29, 29, 29, 27, 27, 26, 26, 27, 27, 29, 29, 33, 31, 32, 34, 30, 30, 11, 11, 11, 28, 30, 30, 11, 11, 11, 27, 29, 29, 29, 29, 29, 29, 27, 26, 26, 26, 26, 11, 11, 11, 12, 12, 12, 12],
    iconExtended: [2800, 2800, 3000, 2900, 2900, 2900, 2700, 2700, 2600, 2600, 2700, 2700, 2900, 2900, 3300, 3100, 3200, 3400, 3000, 3000, 1100, 1100, 1100, 2800, 3000, 3000, 1100, 1100, 1100, 2700, 2900, 2900, 2900, 2900, 2900, 2900, 2700, 2600, 2600, 2600, 2600, 1100, 1100, 1201, 1200, 1200, 1200, 1200],
    windDirCompass: ["Сх-Пн-Сх", "Пн-Сх", "Пн-Пн-Сх", "Пн", "Пн", "Пн-Пн-Зх", "Пн", "Пн", "Пн", "Пн-Пн-Сх", "Пн-Сх", "Сх-Пн-Сх", "Сх", "Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Сх-Пд-Сх", "Сх", "Сх-Пд-Сх", "Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд-Пд-Сх", "Пд", "Пд-Пд-Зх", "Пд-Зх", "Пд-Пд-Зх", "Пд-Зх", "Пд-Зх", "Зх-Пд-Зх", "Зх-Пд-Зх", "Зх", "Зх-Пн-Зх", "Пн-Зх", "Пн-Зх", "Пн-Пн-Зх", "Пн", "Пн", "Пн-Пн-Сх", "Пн-Пн-Сх", "Пн", "Пн"],
    windDirDegrees: [68, 48, 26, 7, 350, 345, 349, 355, 7, 26, 45, 65, 85, 139, 154, 150, 108, 97, 122, 147, 153, 156, 161, 158, 155, 157, 159, 154, 160, 170, 199, 214, 204, 217, 236, 240, 241, 267, 297, 318, 318, 330, 351, 11, 22, 18, 8, 6],
    windSpeed: [6, 7, 6, 5, 5, 7, 6, 5, 5, 3, 2, 2, 1, 1, 2, 2, 1, 4, 7, 10, 13, 15, 15, 15, 15, 13, 12, 10, 8, 8, 6, 7, 8, 7, 6, 6, 5, 4, 4, 4, 4, 5, 6, 7, 10, 13, 13, 15],
    phrase: ["Значна хмарність", "Значна хмарність", "Мінлива хмарність", "Мінлива хмарність", "Мінлива хмарність", "Мінлива хмарність", "Значна хмарність", "Значна хмарність", "Хмарно", "Хмарно", "Значна хмарність", "Значна хмарність", "Мінлива хмарність", "Мінлива хмарність", "Переважно безхмарно", "Безхмарно", "Сонячно", "Переважно сонячно", "Мінлива хмарність", "Мінлива хмарність", "Зливові дощі", "Зливові дощі", "Зливові дощі", "Значна хмарність", "Мінлива хмарність", "Мінлива хмарність", "Зливові дощі", "Зливові дощі", "Зливові дощі", "Значна хмарність", "Мінлива хмарність", "Мінлива хмарність", "Мінлива хмарність", "Мінлива хмарність", "Мінлива хмарність", "Мінлива хмарність", "Значна хмарність", "Хмарно", "Хмарно", "Хмарно", "Хмарно", "Зливові дощі", "Зливові дощі", "Невеликий дощ", "Дощ", "Дощ", "Дощ", "Дощ"],
    dayInd: ["D", "D", "D", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "D", "D", "D", "D", "D", "D", "D", "D"],
    severity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    rh: [58, 60, 66, 73, 75, 79, 83, 84, 86, 88, 90, 91, 92, 94, 97, 100, 99, 88, 81, 68, 61, 59, 56, 57, 60, 65, 71, 76, 83, 87, 89, 90, 93, 93, 95, 98, 99, 100, 100, 99, 100, 99, 98, 91, 90, 90, 89, 91],
    feelsLike: [12, 11, 10, 9, 9, 8, 7, 6, 7, 7, 7, 6, 6, 5, 5, 5, 6, 8, 9, 10, 11, 12, 12, 12, 11, 11, 10, 10, 8, 8, 7, 7, 6, 6, 5, 4, 5, 4, 4, 5, 6, 6, 6, 8, 7, 7, 7, 7]
  }
};

export default function hourByHour (state = initialState, action) {

  switch (action.type) {
    case 'FETCH_WEATHER': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCH_WEATHER_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'FETCH_WEATHER_FULLFIELD' : {
      return {
        ...state,
        fetching: false,
        hourlyWeather: action.payload
      };
    }
    default:
      return state;
  }
}