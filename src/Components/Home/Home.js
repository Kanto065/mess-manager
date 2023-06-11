import React from 'react';
import './Home.css';
import Card from '../Cards/Card';
import RequestMeal from '../Member/RequestMeal/RequestMeal';
import ExpenseUpdateRequest from '../Member/ExpenseUpdateRequest/ExpenseUpdateRequest';

const Home = () => {
    return (
        <div>
            <div className='cards'>
                <div className='card'>
                    <Card title="form props" value="22"></Card>
                </div>
                <div className='card'>
                    <h2>Other Expense</h2>
                    <h2>30 taka</h2>
                </div>
                <div className='card'>
                    <h2>Meal Rate</h2>
                    <h2>41 taka</h2>
                </div>
                <div className='card'>
                    <h2>Meal Cost</h2>
                    <h2>300 taka</h2>
                </div>
                <div className='card'>
                    <h2>Cost including all</h2>
                    <h2>300 taka</h2>
                </div>
                <div className='card'>
                    <h2>Give/Take</h2>
                    <h2>00 taka</h2>
                </div>
            </div>
            <RequestMeal></RequestMeal>
            <ExpenseUpdateRequest title="Bazar"></ExpenseUpdateRequest>
            <ExpenseUpdateRequest title="Other"></ExpenseUpdateRequest>
        </div>
    );
};

export default Home;