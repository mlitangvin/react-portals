import React from 'react';
import { hydrate } from 'react-dom';
import SomeContext from '.';

hydrate(<SomeContext />, document.getElementById('subscriptionbus'));
