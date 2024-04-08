import React from "react";
import tf from "@tensorflow/tfjs";

const UseTensorFlow = () => {

    let tensor = tf.tensor1d([0, 45, 6, 9]);

    console.log(tensor);
    let testTensor = tensor.print();

    return (
        <div>
            <h3>{testTensor}</h3>
        </div>
    );
};

export default UseTensorFlow;