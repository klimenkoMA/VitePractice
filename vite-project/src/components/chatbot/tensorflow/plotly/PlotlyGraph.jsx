import React, {useEffect, useState} from 'react';
import * as tf from '@tensorflow/tfjs';
import "/src/styles/PlotlyStyle.css";
import Plotly from 'plotly.js-basic-dist';

const UsePlotly = () => {
    const [data, setData] = useState([]);

    // Вычисление данных с использованием TensorFlow.js
    useEffect(() => {
        const x = tf.tensor1d([1, 5, 3, 4, 15, 8, 9]);
        const y = x.square();
        setData(y.arraySync());
    }, []);

    // Создание графика с использованием Plotly.js
    useEffect(() => {
        const trace = {
            x: [1, 2, 3, 4, 5, 6, 7],
            y: data,
            type: 'scatter',
        };

        let layout = {
            width: 600,
            height: 550,
            paper_bgcolor: 'rgb(80,160,290, 0)',
            plot_bgcolor: 'rgba(64, 224, 208, 1)',
            xaxis: {
                tickfont: {
                    color: 'white'
                }
            },
            yaxis: {
                tickfont: {
                    color: 'white'
                }
            }
        };

        Plotly.newPlot('chart', [trace], layout);
    }, [data]);

    return (
        <div className="plotly-graph">
            <div id="chart"/>
        </div>
    );
};

export default UsePlotly;
