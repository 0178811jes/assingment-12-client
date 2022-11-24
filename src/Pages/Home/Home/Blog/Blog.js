import React from 'react';

const Blog = () => {
    return (
        <div className="m-6 p-5 gap-5">
            
            <h2 className="text-3xl">Question & ans</h2>
            <div className="m-3">
                <p>Q-1.how does prototypical inheritance work? </p>
                <br />
                <p>ANS:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. </p>
            </div>
            <div className="m-3">
                <p>Q-2.What are the different ways to manage a state in a REACT application? </p>
                <br />
                <p>ANS:In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way. </p>
            </div>
            <div className="m-3">
                <p>Q-3. What is a unit test? Why should we write unit test?</p>
                <br />
                <p>ANS:Unit Testing is a type of software testing where individual units or components of a software are tested.  </p>
                <p>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.</p>
            </div>
            <div className="m-3">
                <p>Q-4.React vs. Angular vs. vue ?</p>
                <br />
                <p>ANS: Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;