import React from 'react';
import DocumentsList from './Documents';
import "/src/styles/GalleryStyle.css"

const DocumentsPage = () => {
    const documentList = [
        { name: 'Принтер', photo: './public/documents/Printer.pdf' },
        { name: 'Ноутбук', photo: './public/documents/Printer.pdf'},
        { name: 'Монитор', photo: './public/documents/Printer.pdf' },
        { name: 'Веб-камера', photo: './public/documents/Printer.pdf' },
        { name: 'Проектор', photo: './public/documents/Printer.pdf' },
        { name: 'Сканер', photo: './public/documents/Printer.pdf' }
    ];

    return (
        <div>
            <DocumentsList documentList={documentList} />
        </div>
    );
};

export default DocumentsPage;
