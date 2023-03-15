import { mount, later } from '../../../test';

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab dynamically', async () => {
  const wrapper = mount({
    template: `
      <ghb-tabs v-model="active">
        <ghb-tab title="1">1</ghb-tab>
        <div v-if="insert">
          <ghb-tab title="2">2</ghb-tab>
        </div>
        <ghb-tab title="3">3</ghb-tab>
      </ghb-tabs>
    `,
    data() {
      return {
        insert: false,
        active: 1,
      };
    },
  });

  await later();
  wrapper.setData({ insert: true });
  expect(wrapper).toMatchSnapshot();
});

test('insert tab with name dynamically', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-tabs v-model="active" @change="onChange">
        <ghb-tab v-if="insert" title="1" name="bar">2</ghb-tab>
        <ghb-tab title="2" name="foo">1</ghb-tab>
      </ghb-tabs>
    `,
    data() {
      return {
        insert: false,
        active: 'foo',
      };
    },
    methods: {
      onChange,
    },
  });

  await later();
  wrapper.setData({ insert: true });
  expect(wrapper).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(0);
});

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab with child component', async () => {
  const wrapper = mount({
    template: `
      <ghb-tabs v-model="active">
        <ghb-tab title="1">1</ghb-tab>
        <my-tab />
        <ghb-tab title="3">3</ghb-tab>
      </ghb-tabs>
    `,
    components: {
      'my-tab': {
        template: `<ghb-tab title="2">2</ghb-tab>`,
      },
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});
