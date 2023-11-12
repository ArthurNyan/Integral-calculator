import { Provider } from 'react-redux';
import App from './App.js'
import './index.scss'
import * as ReactDOM from 'react-dom/client';
import { store } from './app/store/store.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Provider store={store}><App /></Provider>);


