import React from 'react';
import Information from 'components/Information';
import Canvas from 'components/Canvas';
import FormGrid from 'components/FormGrid';
import ReduxProvider from 'redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ReduxProvider>
      <div data-testid="app" className="container text-center">
        <Information />
        <hr />
        <React.Suspense fallback={<div>Loading...</div>}>
          <FormGrid />
          <hr />
          <Canvas />
        </React.Suspense>
      </div>
    </ReduxProvider>
  );
}

export default App;
