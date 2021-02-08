import React from 'react';
import { hydrate } from 'react-dom';
import Test from './test';

hydrate(<Test />, document.getElementById('root'));
