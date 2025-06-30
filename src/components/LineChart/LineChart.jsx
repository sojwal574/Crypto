import React, { useEffect, useState } from 'react'
import Charts from 'react-google-charts'

const LineChart = ({historicalData}) => { // the historicalData is coming from the API

    const [data , setData] = useState([["Date", "Prices"]]); // as response will be in form of the date and price

    useEffect(() => {
        let datacopy = [["Date" , "Prices"]];
        if(historicalData.prices) {
            historicalData.prices.map((item) => {
                datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0 , -5)}` , item[1]]) // 10/05/2025 so remove the last five characters
            })
            // provide the data to the setData fxn 
            setData(datacopy)
        }
        // date and price array from the api will be pushed into the datacopy
    } , [historicalData]);



  return (
    <div>

        {/* To get the data available on the coin page we have to mount the chart component on the coi.jsx page */}

        {/* Display chart based on the data that is stored into the data */}
        <Charts
            chartType = 'LineChart'
            data = {data}
            height = "100%"
            legendToggle
        
        />

        {/* Now go in the coin.jsx and call the fetchHistoricalData function */}


    </div>
  )
}

export default LineChart


// To create the charts we will use the react google charts library which we have installed previous