import React from 'react';


const History = (props) => {
    const historyList = props.history.map((expression) => {
        return (<tr><td onClick={()=> props.updateDisplayHistory(expression)}>{expression}</td></tr>) 
    })

    return (
        <div className="history-list">
            <table>
                <tbody>
                {historyList.reverse()}
                </tbody>
            </table>
        </div>
    );
}

export default History;