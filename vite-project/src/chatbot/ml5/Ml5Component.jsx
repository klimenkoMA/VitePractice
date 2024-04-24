// import React, { useEffect, useRef } from 'react';
//
// const LearningML5 = () => {
//     const imgRef = useRef();
//
//     useEffect(() => {
//
//         const script = document.createElement('script');
//         const script2 = document.createElement('script2');
//
//         script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js';
//         script2.src = 'https://unpkg.com/ml5@latest/dist/ml5.min.js';
//
//         script.async = true;
//         script2.async = true;
//
//         document.body.appendChild(script);
//         document.body.appendChild(script2);
//
//         let classifier;
//         const img = imgRef.current;
//
//         const setup = () => {
//             classifier.classify(img, gotResult);
//             img.loadPixels();
//         };
//
//         const preload = () => {
//             classifier = script2.imageClassifier('MobileNet');
//         };
//
//         const gotResult = (error, results) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.log(results);
//                 // Handle result
//             }
//         };
//
//         preload();
//         setup();
//     }, []);
//
//     return (
//         <div>
//             <img src="public/vite.svg" alt="example" ref={imgRef} />
//         </div>
//     );
// };
//
// export default LearningML5;