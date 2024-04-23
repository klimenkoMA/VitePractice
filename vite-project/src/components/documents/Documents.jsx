import React from 'react';
import "/src/styles/GalleryStyle.css";

const DocumentsList = ({documentList}) => {
    return (
        <div className="gallery-box">
            {documentList.map((document, index) => (
                <img className="gallery-photo"
                     key={index} src={document.photo}
                     alt={document.name}/>
            ))}
        </div>
    );
};

export default DocumentsList;
