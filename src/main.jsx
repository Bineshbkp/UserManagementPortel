import './index.css'
import ReactDOM from 'react-dom/client';

// ✅ Import Provider from react-redux
import { Provider } from 'react-redux';

// App component
import App from './App';

// Redux store
import store from './app/store';

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
