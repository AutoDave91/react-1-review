import React, {Component} from 'react';

import './Review.css';

class Review extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            amount: '',
            expenses: [],
            total: 0
        }
    }

// 

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

// 

// 

//

    addItem(e){
        e.preventDefault()
        let newExpense = {name: this.state.name, amount: this.state.amount}
        let currentExpenses = this.state.expenses
        let num = +this.state.amount
        let total = this.state.total
        total += num
        currentExpenses.push(newExpense)
        this.setState({expenses: currentExpenses, amount: '', name: '', total: total})
    }

// 

//

    removeItem(amount, i){
        let currentExpenses = this.state.expenses
        currentExpenses.splice(i, 1)
        let num = +amount
        let total = this.state.total
        total -= num
        this.setState({expenses: currentExpenses, total: total})


    }

    render(){
        return (
            <main>
                <nav>
                    <div className="logo-line">
                        <img alt='logo' className="piggy" src={require('./download.svg')} />
                        <h3 className=" budget-builder">Budget Builder</h3>
                    </div>
                    <h4 className="total">Budget Total: $<span id='total'>{this.state.total}</span></h4>
                </nav>
                <section>
                    <div className="monthly-expenses-container">
                        <div className="monthly-expenses">
                            <h4 className="section_header">Monthly Expenses</h4>
                            <ul id='list'>
                            {
                                //
                                
                                // 

                                //
                            }
                                {this.state.expenses.map((e, i) => {
                                    return (
                                        <li key={i}>
                                            {e.name} - ${e.amount}
                                            <img alt='trash' src={require('./trashcan.svg')} onClick={() => this.removeItem(e.amount, i)}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <form className="add-bill-container">
                        <h4 className="section_header">Add Bill</h4>
                        <div className='bill_input'>
                            <h5>Name</h5>
                            <input name='name' value={this.state.name} onChange={(e) => {this.onChange(e)}}/>
                        </div>
                        <div className='bill_input'>
                            <h5>Amount</h5>
                            <input name='amount' type='number' value={this.state.amount} onChange={(e) => this.onChange(e)}/>
                        </div>
                        <button onClick={(e) => {this.addItem(e)}}>Add</button>
                    </form>
                </section>
            </main>
        )
    }
}

export default Review