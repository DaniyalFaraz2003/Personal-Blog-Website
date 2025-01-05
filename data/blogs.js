export const blogs = [
    {
        id: "1",
        title: "Introduction to JavaScript",
        username: "Daniyal Faraz",
        date: "2023-10-01T10:00:00Z",
        description: "A beginner's guide to JavaScript for everyone to get a starter in the language.",
        badges: ["JavaScript", "Beginner", "Guide"],
        image: "/user.png",
        latest: true,
        content: `
![javascript.png](/javascript.png)
# Introduction to JavaScript
JavaScript is a versatile programming language used for web development. It allows you to create dynamic and interactive web pages.
## Getting Started
You can output something to the console using the \`console.log()\` function:
\`\`\`javascript
console.log('Hello, World!');
\`\`\`
        `
    },
    {
        id: "2",
        title: "Understanding Asynchronous JavaScript",
        username: "Daniyal Faraz",
        date: "2023-09-15T14:30:00Z",
        description: "Learn about asynchronous programming in JavaScript.",
        badges: ["JavaScript", "Asynchronous", "Programming"],
        image: "/user.png",
        latest: false,
        content: `
# Understanding Asynchronous JavaScript
Asynchronous programming in JavaScript allows you to perform tasks without blocking the main thread. This is essential for tasks like fetching data from an API.
## Callbacks
Callbacks are a common way to handle asynchronous code. For example, you can use a callback function with \`setTimeout()\`:
\`\`\`javascript
setTimeout(() => {
    console.log('Delayed message');
}, 1000);
\`\`\`
        `
    },
    {
        id: "3",
        title: "Mastering React",
        username: "Daniyal Faraz",
        date: "2023-08-20T09:00:00Z",
        description: "Advanced concepts in React for building complex applications.",
        badges: ["React", "Advanced", "Web Dev"],
        image: "/user.png",
        latest: false,
        content: `
# Mastering React
React is a powerful library for building user interfaces. In this article, we will explore advanced concepts such as hooks, context, and performance optimization.
## Hooks
Hooks are a way to add state and other React features to functional components. For example, you can use the \`useState\` hook to manage state:
\`\`\`javascript
import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
\`\`\`
        `
    }
];

