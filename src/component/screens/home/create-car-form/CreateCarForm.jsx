import React, { useState } from 'react';
import styles from './CreateCarForm.module.css'; // Проверьте правильность пути

const CreateCarForm = ({setCars}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const createCar = (e) => {
        e.preventDefault()
        setCars(prev => [...prev, { id: prev.length + 1, name, price, image }]);
        setName('');
        setPrice('');
        setImage('');
    };

    return (
        <form className={styles.form} onSubmit={createCar}>
            <input
                placeholder='Name'
                onChange={e => setName(e.target.value)} // Исправлено на onChange
                value={name}
            />
            <input
                placeholder='Price'
                onChange={e => setPrice(e.target.value)} // Исправлено на onChange
                value={price}
            />
            <input
                placeholder='Image'
                onChange={e => setImage(e.target.value)} // Исправлено на onChange
                value={image}
            />
            <button className='btn' onClick={e=>createCar(e)}>Create</button>
        </form>
    );
};

export default CreateCarForm;
