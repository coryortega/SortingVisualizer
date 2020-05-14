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

    swap(arr, first_Index, second_Index){
        var temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
        this.setState({
            array: arr
        })
    }
    
    bubbleSort(arr){
        console.log(arr)
        var len = arr.length,
            i, j, stop;
    
        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (arr[j] > arr[j+1]){
                    this.swap(arr, j, j+1);
                    // setTimeout(this.swap, arr, j, j+1, 2000)
                }
            }
        }
        // console.log(arr)
        // return arr = this.state.array;
        // this.setState({
        //     array: arr
        // })
    }

    // testSortingAlgorithms(){
    //     for (let i = 0; i < 100; i++){
    //         const array = []
    //         const length = randomIntFromInterval(1, 1000);
    //         for (let i = 0; i < length; i++){
    //             array.push(randomIntFromInterval(-1000, 1000));
    //         }
    //         const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    //         const mergeSortedArray = this.SortingAlgorithms.mergeSort((array.slice()));
    //         console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    //     }
    // }
    render(){
        const {array} = this.state;
        console.log("this is state", array)
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
            <button onClick={() => this.bubbleSort(array)}>Bubble Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}