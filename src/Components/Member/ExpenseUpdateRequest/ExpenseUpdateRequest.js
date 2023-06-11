import React from 'react';

const ExpenseUpdateRequest = (props) => {
    return (
        <div>
            <h2>{props.title} Expense Update</h2>
            <input type="text" />
            <button>Request Update</button>
        </div>
    );
};

export default ExpenseUpdateRequest;