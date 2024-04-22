import React from "react";
import * as tf from "@tensorflow/tfjs";



const UseTensorFlow = () => {


    let tensor = tf.tensor1d([0, 45, 6, 9]);

    // console.log(tensor);
    const testTensor = tensor.array();

    return (
        <div>
            <h1>Результаты: </h1>
            {testTensor}
        </div>
    );
};

export default UseTensorFlow;