import express from 'express';
import axios from 'axios';
import { matchRoutes } from 'react-router-config';
import bodyParser from 'body-parser';
import { check, validationResult } from 'express-validator/check';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import '@babel/polyfill';
import renderer from './renderer';
import createStore from '../utils/createStore';
import routes from '../utils/routes';

import '../client/assets/img/favicons/android-chrome-192x192.png';
import '../client/assets/img/favicons/android-chrome-512x512.png';
import '../client/assets/img/favicons/apple-touch-icon.png';
import '../client/assets/img/favicons/favicon-16x16.png';
import '../client/assets/img/favicons/favicon-32x32.png';
import '../client/assets/img/favicons/mstile-150x150.png';
import '../client/assets/img/favicons/safari-pinned-tab.svg';
import '../client/assets/img/favicons/favicon.ico';


library.add(
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
  faTimesCircle,
);

const app = express();

app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sendMail = async (data) => {
  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_SERVICE,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER, // generated ethereal user
      pass: process.env.NODEMAILER_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'info@endpoint.uz', // sender address
    to: 'info@endpoint.uz', // list of receivers
    subject: 'Заявка', // Subject line
    html: `
      <b>Компания:</b> ${data.company} <br />
      <b>Имя:</b> ${data.name} <br />
      <b>Телефон:</b> ${data.phone} <br />
      <b>Эл. почта:</b> ${data.email} <br />
      <b>Комментарий к заявке:</b> ${data.comment} <br />
      <b>Описание проекта:</b> ${data.description} <br />
      <b>Ориентировочный бюджет:</b> ${data.small ? '5-10,' : ''} ${data.mid ? '10-100, ' : ''} ${data.big ? '100+,' : ''} ${data.unknown ? 'Не определено' : ''}<br />
      <b>Проект:</b> 
      ${data.mobile ? 'Mobile App,' : ''}
      ${data.site ? 'Website,' : ''}
      ${data.service ? 'Service,' : ''}
      ${data.eCommerce ? 'e-commerce,' : ''}
      ${data.other ? 'Other,' : ''}
      <br />
    `, // html body
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

// check('name')
//   .exists({ checkNull: true, checkFalsy: true })
//   .withMessage('Имя не может быть пустым'),
//   // password must be at least 5 chars long
//   check('phone')
//     .matches(/\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}/)
//     .withMessage('Неверныйй формат телефона'),
//   check('email')
//     .isEmail()
//     .withMessage('Неверный формат эл.почты'),

app.post('/send-request', [
  check('name')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Имя не может быть пустым'),
  check('phone')
    .matches(/\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}/)
    .withMessage('Неверныйй формат телефона'),
  check('email')
    .isEmail()
    .withMessage('Неверный формат эл.почты'),
], async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const captcha = await axios.post('https://www.google.com/recaptcha/api/siteverify', {}, {
    params: {
      secret: '6Leaz6kUAAAAAMNOVZDzSRnkj5bVP1gTaPXooqGQ',
      response: req.body.captchaToken,
    },
  });

  if (captcha.success) {
    return sendMail(req.body).then(() => {
      res.sendStatus(200).end();
    }).catch((e) => {
      res.sendStatus(504).end(e);
    });
  }

  return res.status(422).json(captcha.data);

  // return null;
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

app.get('*', (req, res) => {
  const store = createStore({});
  const promises = matchRoutes(routes, req.path).map(
    ({ route, match }) => (route.loadData ? route.loadData(store, match, req.get('cookie') || {}, req.query) : null),
  );

  Promise.all(promises).then(() => {
    const result = renderer(req, store);
    const { context } = result;
    if (context && context.status !== undefined) {
      // res.status(context.status);
      res.writeHead(200, { 'Content-Type': 'text/html' });
    }
    res.send(result.jsx);
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listenting to port 3000');
});
