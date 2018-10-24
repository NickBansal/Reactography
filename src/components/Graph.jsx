import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const Graph = ({ category, booklist }) => {
   
    const newList = booklist.reduce((acc, value) => {
        let newValue
        if (category === 'Genre') newValue = value.volumeInfo.categories
        if (category === 'Author') newValue = value.volumeInfo.authors[0]
        if (category === 'Publisher') newValue = value.volumeInfo.publisher
        acc[newValue] ? acc[newValue]++ : acc[newValue] = 1
        return acc
    }, {})
    
    const newArray = Array(booklist.length).fill(null)

    const data = {
        labels: Object.keys(newList),
        datasets: [{
            data: Object.values(newList),
            backgroundColor: newArray.map(item => '#' + Math.floor(Math.random()*16777215).toString(16)),
            hoverBackgroundColor: newArray.map(item => '#' + Math.floor(Math.random()*16777215).toString(16))
        }]
    };

    return (
        <div>
            {category && <h2>{category} Graph</h2>}
            {category && <Doughnut data={data} />}
        </div>
    )
}

export default Graph;