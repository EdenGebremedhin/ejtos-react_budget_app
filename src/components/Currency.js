import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const options = [
        { value: 'Pound £', label: '£ Pound' },
        { value: 'Dollar $', label: '$ Dollar' },
        { value: 'Euro €', label: '€ Euro' },
        { value: 'Rupee ₹', label: '₹ Rupee' },
    ];

    const handleCurrencyChange = (value) => {
        setSelectedCurrency(value);
        setShowDropdown(false); // Close the dropdown
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const dropdownStyle = {
        position: 'absolute',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        marginTop: '5px',
        width: '100%',
        zIndex: 1,

    };

    const inputStyle = {
        marginLeft: '10px',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: 'white',
        width: '150px',
        cursor: 'pointer',
    };


    return (
        <div className='alert alert-secondary' style={{ position: 'relative' }}>
            <span>Currency: </span>
            <input
                type="text"
                value={selectedCurrency}
                readOnly
                onClick={toggleDropdown}
                style={inputStyle}
            />
            {showDropdown && (
                <div style={dropdownStyle}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleCurrencyChange(option.value)}
                            style={{
                                padding: '8px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #eee',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'lightpink'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Currency;
