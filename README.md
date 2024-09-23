# Weather Forecast App
A weather forecasting application built with React and Vite, using TailwindCSS for styling and Netlify for deployment.
## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pooja-sharma-60/weather-forecast
   cd weather-forecast

2. **Install dependencies**:

    npm install

3. **API KEY and API URL**:
    # Obtain an API key from OpenWeather (or another weather API provider).
    # Create a .env file in the root directory and add your API key and API url:
        VITE_API_KEY = api_key_here
        VITE_API_URL = api_url_here

4. **Run the app locally**:
    npm run dev

### Build for Production
# To create a production build:
     npm run build

### Assumptions: 
# API keys are stored as environment variables.
# TailwindCSS is used for the responsive design.

### How to Use the Application
1. Open the app in a browser.
2. Enter a city name to get the weather forecast.
3. The app displays the current weather and an hourly forecast for the selected location.

### Deployment
# The project is deployed on Netlify. Here is the link :
https://main--silly-bunny-1162e6.netlify.app/