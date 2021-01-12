import React from 'react';
import {render} from '@testing-library/react';
import ReduxProvider from 'redux/store';
// eslint-disable-next-line react/prop-types
const AllTheProviders = ({children}) => {
  return (
    <React.Fragment>
      <ReduxProvider>{children}</ReduxProvider>
    </React.Fragment>
  );
};

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

//re-export everything from testing lib
export * from '@testing-library/react';

export {customRender as render};
