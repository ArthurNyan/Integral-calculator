import { Provider } from 'react-redux';
import App from './App.jsx'
import './index.css'
import * as ReactDOM from 'react-dom/client';
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>);


