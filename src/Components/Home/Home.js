import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='cards'>
                <div className='card'>
                    <h2>Bazar Expense</h2>
                    <h2>300 taka</h2>
                </div>
                <div className='card'>
                    <h2>Meal Count</h2>
                    <h2>30</h2>
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
        </div>
    );
};

export default Home;