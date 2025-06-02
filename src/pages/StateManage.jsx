import React, { useEffect, useState } from 'react';

export default function StateManage() {
    // State for text and number
    const [data, setData] = useState("Default data");
    const [num, setNum] = useState(0);

    // Update functions
    const updateCurrentData = () => {
        setData("New data");
    };
    //use effect,dependencies checker
    // initially logic api calls
    useEffect(
        ()=>{
            setData("initial data change")
        },
        [] //empty for initial run
    )
    //2. state dependencies
    useEffect(
        () => {
            if(data=="chirayu"){
                setNum[1000]
            }

        },
        [data] //list of states
    )
    //logic num <0 data less else more
    useEffect(
        ()=>{
            if(num <0){
                setData("less")
            }else{
                setData("More")
            }

        },
        [num]
    )

    const handleName=(e) => setData(e.target.value)

    return (
        <div>
            <div>
                <p>Text: {data}</p>
                <button onClick={updateCurrentData}>Click me</button>
                <button onClick={() => setData("from callback")}>Click callback</button>
                <input
                    type="text"
                    placeholder="Type to change text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
            </div>

            <div>
                <p>Number: {num}</p>
                <button onClick={() => setNum(num + 1)}>+</button>
                <button onClick={() => setNum(num - 1)}>-</button>
            </div>

            {/* Optional second input, corrected */}
            <div>
                <input
                    type="text"
                    placeholder="Another input"
                    onChange={(e) => setData(e.target.value)}
                />
                <input onChange={handleName}></input>
            </div>
        </div>
    );
}
