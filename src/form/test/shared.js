import { mount, later } from '../../../test';

export async function submitForm(wrapper) {
  wrapper.find('.ghb-button').trigger('click');
  return later();
}

export function mountForm(options) {
  return mount(options, { attachToDocument: true });
}

export function getSimpleRules() {
  return {
    rulesA: [{ required: true, message: 'A failed' }],
    rulesB: [{ required: true, message: 'B failed' }],
  };
}

export function mountSimpleRulesForm(options) {
  return mountForm({
    template: `
      <ghb-form ref="form" @failed="onFailed">
        <ghb-field name="A" :rules="rulesA" value="" />
        <ghb-field name="B" :rules="rulesB" value="" />
        <ghb-button native-type="submit" />
      </ghb-form>
    `,
    data: getSimpleRules,
    ...options,
  });
}
