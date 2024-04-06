import * as tf from '@tensorflow/tfjs';
import model from './gemma-2b-it-gpu-int4.bin'; // Путь к файлу с преобученной моделью


const answerQuestion = async (question) => {
    try {
        const input = tf.tensor(question); // Преобразование вопроса в тензор

        // Применение преобученной модели к вопросу
        const output = model.predict(input);

        const answer = await output.data(); // Получение ответа на вопрос

        return answer;
    } catch (e) {
        console.log(e.message);
    }
};

export default answerQuestion;