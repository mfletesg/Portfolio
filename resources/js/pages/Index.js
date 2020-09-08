import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import 'font-awesome/css/font-awesome.min.css';


if (document.getElementById('page')) {
    const container = document.getElementById('page')
    ReactDOM.render(<App />, container);
}
