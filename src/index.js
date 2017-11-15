import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store/index.js';
registerServiceWorker();

ReactDOM.render(
<Provider store= {store} >
<App/>
</Provider>, document.getElementById('root'));
