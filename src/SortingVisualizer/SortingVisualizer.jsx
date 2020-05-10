import React from 'react';
import './SortingVisualizer.css'

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray()
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 200; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array})
    }

    mergeSort(){
        const javaScriptSortedArray = this.state.array
            .slice()
            .sort((a,b) => a - b);
    }

    quickSort(){}

    heapSort(){}

    bubbleSort(){}

    testSortingAlgorithms(){
        for (let i = 0; i < 100; i++){
            const array = []
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = this.SortingAlgorithms.mergeSort((array.slice()));
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }
    render(){
        const {array} = this.state;

        return (
            <div className='array-container'>
            {array.map((value,idx) => (
                <div
                className='array-bar'
                key={idx}
                style={{height: `${value}px`}}>
                </div>
            ))}
            <button onClick={() => this.resetArray()}>New Array</button>
            <button onClick={() => this.resetArray()}>Merge Sort</button>
            <button onClick={() => this.resetArray()}>Quick Sort</button>
            <button onClick={() => this.resetArray()}>Map Sort</button>
            <button onClick={() => this.resetArray()}>Bubble Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}