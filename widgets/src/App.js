import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

// const items = [{
//         title: 'What is React?',
//         content: 'React is a front end javascript library'
//     }, {
//         title: 'Why use React?',
//         content: 'React is awesome!'
//     }, {
//         title: 'How do you use React?',
//         content: 'You use React with components'
//     }
// ];

export default () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    );
}