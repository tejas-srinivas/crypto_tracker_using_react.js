import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
import { Line } from 'react-chartjs-2';
import { CategoryScale, 
    Chart ,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend} from "chart.js";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
    );

const HistoryChart = () => {
  const { coinId } = useParams();
  const [chartData,setChartData] = useState({})

  const url =  `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=1`

  useEffect(() => {
        axios.get(url).then((response) => {
            setChartData(response.data)
        }).catch((error) => {
            console.log(error)
        })
  }, [coinId])
  //console.log(chartData.prices)
  if(chartData.prices){
    const coinChartData = chartData.prices.map(value => ({ x: value[0],y: value[1].toFixed(2)}));

    const options = {responsive:true}

    const data = {
        labels: coinChartData.map(value => moment(value.x).format('MMM-DD')),
        datasets: [
            {
                fill: true,
                label: coinId,
                data: coinChartData.map(value => value.y),
                borderColor: 'hsl(250,69%,61%)',
                backgroundColor: 'hsl(248, 37%, 15%)'
            }
        ]
      }

      return (
        <div>
            <Line options={options} data={data}/>
        </div>
      );
  }
 
}

export default HistoryChart;
