import React from 'react';
import ReturnJSon from './Controllers/return-json'
import './Css/App.css';

const urlAllInfo = 'https://disease.sh/v2/all';
//const urlCountrysAllInfo = "https://disease.sh/v2/countries";

export default function App() {

    let data = < ReturnJSon url={urlAllInfo} />;
    
    return ( 
        <div className="list">
            <h1>teste</h1>   
           {data}
    </div>
    );

}
