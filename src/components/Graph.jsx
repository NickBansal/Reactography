import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const Graph = ({ category, booklist }) => {

   
    const newList = booklist.reduce((acc, value) => {
        let newValue = value.volumeInfo.categories
        acc[newValue] ? acc[newValue]++ : acc[newValue] = 1
        return acc
    }, {})
    
    console.log(Array(newList.length).fill().map(item => '#'+ Math.floor(Math.random()*16777215).toString(16)))

    const data = {
        labels: Object.keys(newList),
        datasets: [{
            data: Object.values(newList),
            backgroundColor: Array(newList.length).fill().map(item => '#'+ Math.floor(Math.random()*16777215).toString(16)),
            hoverBackgroundColor: Array(newList.length).fill().map(item => '#'+ Math.floor(Math.random()*16777215).toString(16))
        }]
    };

    return (
        <div>
            <h2>Doughnut Example</h2>
            <Doughnut data={data} />
        </div>
    )
}

export default Graph;