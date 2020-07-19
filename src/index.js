import React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';
import Input from './Input';
import Progress from './Progress';

import './style/index.css';

render(<div><Counter /><Input /><br /><Progress /></div>, document.getElementById('root'));

