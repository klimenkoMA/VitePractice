import * as tf from '@tensorflow/tfjs';
import model from './model.json'; // Путь к файлу с преобученной моделью


const answerQuestion = async (question) => {
    try {
        const input = tf.tensor(question); // Преобразование вопроса в тензор

        // Применение преобученной модели к вопросу
        const output = model.predict(input);


         // Получение ответа на вопрос
        return await output.data();
    } catch (e) {
        console.log(e.message);
    }
};

export default answerQuestion;