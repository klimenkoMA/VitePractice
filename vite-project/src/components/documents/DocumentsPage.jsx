import React from 'react';
import DocumentsList from './Documents';
import "/src/styles/GalleryStyle.css"

const DocumentsPage = () => {
    const documentList = [
        { name: 'Принтер', photo: './public/documents/Printer.jpg' },
        { name: 'Ноутбук', photo: './public/documents/Nout.jpg'},
        { name: 'Монитор', photo: './public/documents/Monitor.jpg' },
        { name: 'Веб-камера', photo: './public/documents/Camera.jpg' },
        { name: 'Проектор', photo: './public/documents/Proector.jpg' },
        { name: 'Сканер', photo: './public/documents/Scaner.jpg' }
    ];

    return (
        <div>
            <DocumentsList documentList={documentList} />
        </div>
    );
};

export default DocumentsPage;
