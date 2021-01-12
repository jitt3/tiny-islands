import React from 'react';
import {render} from 'utils/test-utils';
import FormGrid from './FormGrid';
import {blockName} from './FormGrid';

describe('Form Grid', () => {
  it('should render formgrid properly', () => {
    const formgrid = render(<FormGrid />, {});
    expect(formgrid.getByTestId(blockName)).toBeInTheDocument();
  });
});
