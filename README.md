# Weather App Using OpenWeather API

## Overview

This is a simple weather forecasting application built with React. It uses the OpenWeather API to fetch and display weather data for various locations.

## Features

- Search for current weather by city name
- Display weather information including temperature, humidity, wind speed, and weather conditions
- Responsive design for both mobile and desktop users
- 5 day weather forecast and hourly forecast
- use your own location ot access the weather condition
- the weather data will we provided in fhrenhite and Celsius 

## Screenshots
  https://drive.google.com/drive/folders/1FeBUPt4DaF2KoLOMTqMZ1duNYErOZM0V?usp=drive_link
## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Silver-Runner/weather-app-using-open-weather-api.git
    cd weather-app-using-open-weather-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Get an API key from OpenWeather:**

    Sign up at [OpenWeather](https://openweathermap.org/) to get your API key.

4. **Create a `.env` file in the root directory and add your API key:**

    ```plaintext
    REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
    ```

5. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

- Enter the name of a city in the search bar to get the current weather information you  can also click on the icon for current location to get the 
- The app will display the weather data including temperature, humidity, wind speed, and a brief description of the weather conditions.

## Technologies Used

- React
- Axios for API requests
- tailwind for giving the  styles

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.[MIT License.docx](https://github.com/user-attachments/files/16472760/MIT.License.docx)


## Acknowledgements

- [OpenWeather](https://openweathermap.org/) for providing the weather data API.
- React documentation and community for support and tutorials.
