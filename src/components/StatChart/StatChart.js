import React from 'react';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';
const StatChart = ({card}) => {
    const {name, total} = card;
    const data = [
        {title: `${name}`, sum: `${total}`},
        {title: `${name}`, sum: `${total}`}
    ]
    return (
        <div>
            <BarChart width={400} height={400} data={data}>
                <XAxis dataKey="title">
                </XAxis>
                <YAxis dataKey="sum">
                </YAxis>
                <Bar dataKey="sum"></Bar>
            </BarChart> 
        </div>
    );
};

export default StatChart;