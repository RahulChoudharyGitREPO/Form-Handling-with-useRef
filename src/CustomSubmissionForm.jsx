// src/components/CustomSubmissionForm.js
import React, { useRef } from 'react';

const CustomSubmissionForm = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            inputValue: inputRef.current.value,
        };
        // Perform custom processing or validation here
        console.log('Form data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomSubmissionForm;
