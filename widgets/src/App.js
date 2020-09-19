import React, { useState } from 'react';
import Route from './components/Route';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';


const items = [{
        title: 'What is React?',
        content: 'React is a front end javascript library'
    }, {
        title: 'Why use React?',
        content: 'React is awesome!'
    }, {
        title: 'How do you use React?',
        content: 'You use React with components'
    }
];

const options = [{
        label: 'Bitcoin',
        value: 'BTC'
    }, {
        label: 'Ethereum',
        value: 'ETH'
    }, {
        label: 'Stellar',
        value: 'XLM'
    }
];

export default () => {
    const [option, setOption] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path ="/dropdown">
                <Dropdown 
                    options={options}
                    selected={option}
                    onSelectedChange={setOption}
                    label='Select a coin'
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}