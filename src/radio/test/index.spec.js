import { mount } from '../../../test';

test('radio-group change', () => {
  const wrapper = mount({
    template: `
      <ghb-radio-group v-model="result" @change="$emit('change', $event)">
        <ghb-radio
          v-for="item in list"
          :key="item"
          :name="item"
          :disabled="item === 'd'"
        >
          label
        </ghb-radio>
      </ghb-radio-group>
    `,
    data() {
      return {
        result: 'a',
        list: ['a', 'b', 'c', 'd'],
      };
    },
  });

  const icons = wrapper.findAll('.ghb-radio__icon');
  const labels = wrapper.findAll('.ghb-radio__label');

  icons.at(2).trigger('click');
  expect(wrapper.vm.result).toEqual('c');
  expect(wrapper.emitted('change')[0][0]).toEqual('c');

  labels.at(1).trigger('click');
  expect(wrapper.vm.result).toEqual('b');
  expect(wrapper.emitted('change')[1][0]).toEqual('b');

  icons.at(3).trigger('click');
  labels.at(3).trigger('click');
  expect(wrapper.vm.result).toEqual('b');
});

test('radio group disabled', () => {
  const wrapper = mount({
    template: `
      <ghb-radio-group v-model="result" disabled @change="$emit('change', $event)">
        <ghb-radio
          v-for="item in list"
          :key="item"
          :name="item"
        >
          label
        </ghb-radio>
      </ghb-radio-group>
    `,
    data() {
      return {
        result: 'a',
        list: ['a', 'b', 'c', 'd'],
      };
    },
  });

  const icons = wrapper.findAll('.ghb-radio__icon');
  icons.at(2).trigger('click');

  expect(wrapper.emitted('change')).toBeFalsy();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <ghb-radio-group icon-size="10rem">
        <ghb-radio>label</ghb-radio>
        <ghb-radio icon-size="5rem">label</ghb-radio>
      </ghb-radio-group>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('checked-color prop', () => {
  const wrapper = mount({
    template: `
      <ghb-radio-group checked-color="black">
        <ghb-radio :value="true">label</ghb-radio>
        <ghb-radio :value="true" checked-color="white">label</ghb-radio>
      </ghb-radio-group>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
