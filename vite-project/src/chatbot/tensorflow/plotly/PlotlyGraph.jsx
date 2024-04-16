import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Plotly from 'plotly.js-basic-dist';

const UsePlotly = () => {
    const [data, setData] = useState([]);

    // Вычисление данных с использованием TensorFlow.js
    useEffect(() => {
        const x = tf.tensor1d([1, 2, 3, 4, 5]);
        const y = x.square();
        setData(y.arraySync());
    }, []);

    // Создание графика с использованием Plotly.js
    useEffect(() => {
        const trace = {
            x: [1, 2, 3, 4, 5],
            y: data,
            type: 'scatter',
        };

        let layout = {
            width: 300,
            height: 250,
            paper_bgcolor: 'rgb(80,160,290, 0)',
            plot_bgcolor: 'rgba(64, 224, 208, 1)'
    };

        Plotly.newPlot('chart', [trace], layout);
    }, [data]);

    return (
        <div id="chart"></div>
    );
};

export default UsePlotly;
