// src/components/ValidationForm.js
import React, { useRef, useState } from 'react';

const ValidationForm = () => {
    const [valid, setValid] = useState(true);
    const inputRef = useRef(null);

    const handleValidation = () => {
        const inputValue = inputRef.current.value;
        if (inputValue.length >= 5) {
            setValid(true);
        } else {
            setValid(false);
        }
    };

    return (
        <div>
            <input ref={inputRef} onChange={handleValidation} />
            {!valid && <p>Input must be at least 5 characters long.</p>}
        </div>
    );
};

export default ValidationForm;
