import React, { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { saveAs } from 'file-saver';

const ModelConverter = () => {
    useEffect(() => {
        const convertModel = async () => {

            const url = 'src/chatbot/tensorflow/gemma-2b-it-gpu-int4.bin';
            console.log('Source is: ' + url);

            try {
                const model = await tf.loadLayersModel(url);
                console.log('Second step');

                const modelJson = model.toJSON();

                console.log('Third step');

                const jsonContent = JSON.stringify(modelJson);

                console.log('Fourth step');

                const blob = new Blob([jsonContent], { type: 'application/json' });

                console.log('Fifth step');

                saveAs(blob, 'model.json');

                console.log('Sixth step');
            }catch (e) {
                console.log(e);
            }
        };

        convertModel().then();
    }, []);

    return (
        <div>
            <h3>Model Converter</h3>
            <p>Converting model from .bin to .json...</p>
        </div>
    );
};

export default ModelConverter;
