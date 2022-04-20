import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './componets/App';
import Layout from './componets/layout/layout';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


