import React from 'react';

// This is a functional component which shows the users calculated history
const History = (props) => {
    const historyList = props.history.map((obj, index) => {
        return (<tr key={index} ><td onClick={()=> props.updateDisplayHistory(obj.exp)}>{obj.exp} = {obj.result}</td></tr>) 
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