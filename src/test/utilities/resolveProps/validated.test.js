import React from 'react';
import mount from '../../addSourceWizard/__mocks__/mount';

import { Spinner } from '@patternfly/react-core/dist/esm/components/Spinner/Spinner';
import { FormHelperText } from '@patternfly/react-core/dist/esm/components/Form/FormHelperText';

import Form from '@data-driven-forms/react-form-renderer/form';

import validated, { ValidatingSpinner } from '../../../utilities/resolveProps/validated';

describe('resolveProps - validated', () => {
  it('Spinner is renderer correctly', () => {
    const wrapper = mount(<ValidatingSpinner validating />);

    expect(wrapper.find(Spinner)).toHaveLength(1);
    expect(wrapper.find(FormHelperText).text()).toEqual('Validating');
  });

  const props = {};

  it('returns spinner when validating', () => {
    expect(validated(props, { meta: { validating: true } })).toEqual({
      helperText: expect.any(Object),
    });

    expect(
      mount(<Form onSubmit={jest.fn()}>{() => validated(props, { meta: { validating: true } }).helperText}</Form>).find(
        ValidatingSpinner
      )
    ).toHaveLength(1);
  });

  it('returns success state when valid', () => {
    expect(validated(props, { meta: { valid: true } })).toEqual({
      validated: 'success',
      FormGroupProps: {
        validated: 'success',
      },
    });
  });

  it('return empty object when not valid and not validating', () => {
    expect(validated(props, { meta: { valid: false, validating: false } })).toEqual({});
  });
});
