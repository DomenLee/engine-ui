import { mount } from '../../../test';
import Sidebar from '..';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-sidebar @change="onChange">
        <ghb-sidebar-item>Text</ghb-sidebar-item>
        <ghb-sidebar-item @click="onClick">Text</ghb-sidebar-item>
      </ghb-sidebar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.findAll('.ghb-sidebar-item').at(1).trigger('click');
  expect(onClick).toHaveBeenCalledWith(1);
  expect(onChange).toHaveBeenCalledWith(1);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-sidebar v-model="active" @change="onChange">
        <ghb-sidebar-item>Text</ghb-sidebar-item>
        <ghb-sidebar-item>Text</ghb-sidebar-item>
      </ghb-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      onChange,
    },
  });

  wrapper.findAll('.ghb-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);
  expect(onChange).toHaveBeenCalledWith(1);
});

test('disabled prop', () => {
  const wrapper = mount({
    template: `
      <ghb-sidebar v-model="active">
        <ghb-sidebar-item>Text</ghb-sidebar-item>
        <ghb-sidebar-item disabled>Text</ghb-sidebar-item>
      </ghb-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper.findAll('.ghb-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(0);
});

test('without parent', () => {
  const consoleError = console.error;
  try {
    console.error = jest.fn();
    mount(Sidebar);
  } catch (err) {
    console.error = consoleError;
    expect(err).toBeTruthy();
  }
});

test('title slot', () => {
  const wrapper = mount({
    template: `
      <ghb-sidebar v-model="active">
        <ghb-sidebar-item>
          <template #title>Title Slot</template>
        </ghb-sidebar-item>
      </ghb-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  expect(wrapper).toMatchSnapshot();
});
