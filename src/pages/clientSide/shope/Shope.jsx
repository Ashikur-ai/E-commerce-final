import React from 'react';
import { useParams } from 'react-router-dom';

const Shope = () => {
    const slug = useParams();
    const category = slug.category;
    console.log(category);
    return (
        <div className='container mx-auto'>
            This is shope page.
        </div>
    );
};

export default Shope;