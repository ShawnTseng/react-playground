import React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';
import Input from './Input';
import Progress from './Progress';
import withOpen from './hocs/withOpen';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

import './style/index.css';

const ComponentAwithOpen = withOpen(ComponentA);
const ComponentBwithOpen = withOpen(ComponentB);

const DOM = <div>
    <Counter />
    <Input />
    <br />
    <Progress />
    <hr />
    <ComponentAwithOpen />
    <ComponentBwithOpen />
</div>;



render(DOM,
    document.getElementById('root'));

