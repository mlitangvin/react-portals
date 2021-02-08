import express from 'express';
import React from 'react';
import hbs from 'handlebars';
import { renderToString } from 'react-dom/server';

//Components
import Test from '../../components/v1/Test';
import Portal from '../../components/v1/Portal';
import FirstPage from '../../components/v2/FirstPage';
import SecondPage from '../../components/v2/SecondPage';
import FirstPage3 from '../../components/v3/FirstPage';
import SecondPage3 from '../../components/v3/SecondPage';
import SomeContext from '../../components/v3/SubscriptionBus';
import FirstPage4 from '../../components/v4/FirstPage';
import SecondPage4 from '../../components/v4/SecondPage';
import SomeContext4 from '../../components/v4/SubscriptionBus';
//End Component

const test = express.Router();

test.get('/v1', async (req, res) => {
  const result = `
  <html>
    <head>
      <title>React Portals</title>
    </head>
    <body>
      <div id="root">{{{reactcomp}}}</div>
      <div id="portal"></div>
      <script src="/test.js?v=1" charset="utf-8"></script>
      <script src="/vendor.js?v=1" charset="utf-8"></script>
    </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(result);
  const reactcomp = renderToString(<Test />);
  const htmlToSend = hbsTemplate({ reactcomp }); //More component can be added here in another words we can do more things

  res.send(htmlToSend);
});

test.get('/v2', async (req, res) => {
  const result = `
  <html>
    <head>
      <title>React Portals</title>
    </head>
    <body>
      <div id="oneroot">{{{onecomp}}}</div>
      <div id="tworoot">{{{twocomp}}}</div>
      <script src="/firstpage.js?v=1" charset="utf-8"></script>
      <script src="/vendor.js?v=1" charset="utf-8"></script>
    </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(result);
  const onecomp = renderToString(<FirstPage />);
  const twocomp = renderToString(<SecondPage />);
  const htmlToSend = hbsTemplate({ onecomp }); //More component can be added here in another words we can do more things

  res.send(htmlToSend);
});

test.get('/v3', async (req, res) => {
  const result = `
  <html>
    <head>
      <title>React Portals</title>
    </head>
    <body>
      <div id="oneroot">{{{onecomp}}}</div>
      <div id="tworoot">{{{twocomp}}}</div>
      <div id="subscriptionbus">{{{subscriptionbus}}}</div>
      <script src="/subscriptionbus.js?v=1" charset="utf-8"></script>
      <script src="/vendor.js?v=1" charset="utf-8"></script>
    </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(result);
  const subscriptionbus = renderToString(<SomeContext />);
  const htmlToSend = hbsTemplate({ subscriptionbus }); //More component can be added here in another words we can do more things

  res.send(htmlToSend);
});

test.get('/v4', async (req, res) => {
  const result = `
  <html>
    <head>
      <title>React Portals</title>
    </head>
    <body>
      <div id="oneroot">{{{onecomp}}}</div>
      <div id="tworoot">{{{twocomp}}}</div>
      <div id="subscriptionbus">{{{subscriptionbus}}}</div>
      <script src="/firstpage4.js?v=1" charset="utf-8"></script>
      <script src="/secondpage4.js?v=1" charset="utf-8"></script>
      <script src="/subscriptionbus4.js?v=1" charset="utf-8"></script>
      <script src="/vendor.js?v=1" charset="utf-8"></script>
    </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(result);
  const onecomp = renderToString(<FirstPage4 />);
  const twocomp = renderToString(<SecondPage4 />);
  const subscriptionbus = renderToString(<SomeContext4 />);
  const htmlToSend = hbsTemplate({ onecomp, twocomp, subscriptionbus }); //More component can be added here in another words we can do more things

  res.send(htmlToSend);
});

export default test;
