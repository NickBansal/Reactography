import React from 'react';
import '../App.css'

const Category = ({ onChange }) => {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)} name="category">
                <option value="">Please Select an option...</option>
                <option value="Genre">Genre</option>
                <option value="Author">Author</option>
                <option value="Publisher">Publisher</option>
            </select>
        </div>
    )
}

export default Category;