import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e)=> {

        setInputValue(e.target.value)
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); //prevenir la recarga de la página porr defecto
        // console.log('submit')
        if(inputValue.trim().length > 2) {
            setCategories(cats =>[ inputValue]); // ...cats, --> para mantener lo que está en el arreglo
            setInputValue('');
        }
        

    }
    return (
        <>
            <h2>AddCategory</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value= {inputValue}
                    onChange= {handleInputChange}

                />
            </form>
            
        </>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired,

}


