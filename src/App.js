import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencySelector from './components/CurrencySelector';
// import ExpenseItem from './components/ExpenseItem';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {                
                    // Budget component
                    <div className='col-sm'>
                        <CurrencySelector />
                    </div>
                    }  
                    
                        
                    {                
                    // Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    }      

                        {                 
                    //Remaining component
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    }        

                        {                 
                    //ExpenseTotal component
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    }        
                       
                        {/* Add ExpenseList component here under */
                    //ExpenseList component
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                    }         

                        {/* Add ExpenseItem component here under */
                    /*
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                    */
                    
                    }        

                        {/* Add AllocationForm component here under */
                    //AllocationForm component
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                    
                    }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
