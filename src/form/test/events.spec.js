import { mountForm, submitForm, mountSimpleRulesForm } from './shared';

test('submit event', async () => {
  const onSubmit = jest.fn();
  const wrapper = mountForm({
    template: `
      <ghb-form @submit="onSubmit">
        <ghb-field name="A" value="bar" />
        <ghb-button native-type="submit" />
      </ghb-form>
    `,
    methods: {
      onSubmit,
    },
  });

  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('failed event', async () => {
  const onFailed = jest.fn();
  const wrapper = mountSimpleRulesForm({
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(wrapper).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [
      { name: 'A', message: 'A failed' },
      { name: 'B', message: 'B failed' },
    ],
    values: { A: '', B: '' },
  });
});

test('failed event when rule message is empty', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <ghb-form ref="form" @failed="onFailed">
        <ghb-field name="A" :rules="rulesA" value="" />
        <ghb-button native-type="submit" />
      </ghb-form>
    `,
    data() {
      return {
        rulesA: [{ required: true }],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ name: 'A' }],
    values: { A: '' },
  });
});
