import React from 'react';
import '../App.css'

const Category = ({ onChange }) => {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)} name="category">
                <option value="Genre">Please Select an option...</option>
                <option value="Genre">Genre</option>
                <option value="Author">Author</option>
            </select>
        </div>
    )
}

export default Category;