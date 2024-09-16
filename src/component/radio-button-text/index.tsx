import React from 'react'

interface RadioButtonGroupProps {
    label: string
    name: string
    options: { value: string; label: string }[]
    selectedValue: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }

const RadioButtonGroup = ({ label, name, options, selectedValue, onChange }:RadioButtonGroupProps) => {
    return (
      
        <div role="group" aria-labelledby={name}  >
          {options.map((option , index) => (
            <div className='radio-button' 
            key={index}
            > 
            <label key={option.value} 
            style={{
                flex:1,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
                {option.label}
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={onChange}
              />
            </label>
            </div>
          ))}
        
      </div>
    );
  };
  
  export default RadioButtonGroup;
