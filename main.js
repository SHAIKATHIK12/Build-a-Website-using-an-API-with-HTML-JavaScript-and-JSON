const weatherIcons = {
    "Clear": "images/clear.png",
    "Partly Cloudy": "images/pcloudy.png",
    "Cloudy": "images/cloudy.png",
    "Fog": "images/fog.png",
    "Light Rain Showers": "images/ishower.png",
    "Rain Showers": "images/oshower.png",
    "Light Snow": "images/lightsnow.png",
    "Rain": "images/rain.png",
    "Windy": "images/windy.png"
  };
  
  // Example dummy data for now
  const dummyData = {
    forecast: [
      {
        date: "2025-04-08",
        weather: "Clear",
        temp_max: 22,
        temp_min: 14
      },
      {
        date: "2025-04-09",
        weather: "Cloudy",
        temp_max: 20,
        temp_min: 13
      },
      {
        date: "2025-04-10",
        weather: "Rain",
        temp_max: 17,
        temp_min: 11
      }
    ]
  };
  
  const forecastContainer = document.getElementById('forecast');
  
  dummyData.forecast.forEach(day => {
    const weatherType = day.weather;
    const iconPath = weatherIcons[weatherType] || "images/default.png";
  
    const dayHTML = `
      <div class="forecast-day">
        <h3>${day.date}</h3>
        <img src="${iconPath}" alt="${weatherType}" class="weather-icon">
        <p>${weatherType}</p>
        <p>High: ${day.temp_max}°C | Low: ${day.temp_min}°C</p>
      </div>
    `;
  
    forecastContainer.innerHTML += dayHTML;
  });
  