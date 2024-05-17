// src/components/DynamicForm.js
import React, { useRef } from 'react';

const DynamicForm = () => {
    const inputRefs = useRef([]);

    const handleFocus = (index) => {
        inputRefs.current[index].focus();
    };

    return (
        <div>
            <input ref={(el) => (inputRefs.current[0] = el)} placeholder="Field 1" />
            <input ref={(el) => (inputRefs.current[1] = el)} placeholder="Field 2" />
            <input ref={(el) => (inputRefs.current[2] = el)} placeholder="Field 3" />
            <button onClick={() => handleFocus(0)}>Focus Field 1</button>
            <button onClick={() => handleFocus(1)}>Focus Field 2</button>
            <button onClick={() => handleFocus(2)}>Focus Field 3</button>
        </div>
    );
};

export default DynamicForm;
