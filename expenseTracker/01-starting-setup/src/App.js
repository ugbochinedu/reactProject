// import React, {useState} from "react";
// import Expense from "./components/Expenses/Expense";
// import NewExpense from "./components/NewExpense/NewExpense";
import AddUser from "./compo2/Users/AddUser";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: "94.12",
//     date: new Date(2021, 7, 14),
//   },
//   {
//     id: "e2",
//     title: "New Tv",
//     amount: "799.49",
//     date: new Date(2021, 2, 12),
//   },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: "294.67",
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: "450",
//     date: new Date(2021, 5, 1),
//   },
// ];


// function App() {

//   const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
//   const addExpenseHandler = expense => {
//     // ...expense,
//     setExpenses(prevExpenses =>{
//       return [expense, ...prevExpenses]
//     })
//     console.log(expense)
//   }

//   return (
//     <div>
//       <NewExpense onAddExpense = {addExpenseHandler}/>
//       <Expense items={expenses} />
//     </div>
//   );
// }

// export default App;


import React from 'react';

// import CourseGoalList from './compo/CourseGoals/CourseGoalList/CourseGoalList';
// import CourseInput from './compo/CourseGoals/CourseInput/CourseInput';
import './App.css';



const App = () => {
  // const [courseGoals, setCourseGoals] = useState([
  //   { text: 'Do all exercises!', id: 'g1' },
  //   { text: 'Finish the course!', id: 'g2' }
  // ]);

  // const addGoalHandler = enteredText => {
  //   setCourseGoals(prevGoals => {
  //     const updatedGoals = [...prevGoals];
  //     updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
  //     return updatedGoals;
  //   });
  // };


  // const deleteItemHandler = goalId => {
  //   setCourseGoals(prevGoals => {
  //     const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };

  // let content = (
  //   <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  // );


  // if (courseGoals.length > 0) {
  //   content = (
  //     <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
  //   );
  // }

  return (
    <div>
      <AddUser/>
      {/* <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        }
      </section> */}
    </div>
  );
};

export default App;
