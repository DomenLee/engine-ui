import { mount } from '../../../test';

test('click grid item', () => {
  const onClick = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-grid>
        <ghb-grid-item @click="onClick" />
      </ghb-grid>
    `,
    methods: {
      onClick,
    },
  });

  const Item = wrapper.find('.ghb-grid-item__content');
  Item.trigger('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('square and set gutter', () => {
  const wrapper = mount({
    template: `
      <ghb-grid square :column-num="2" gutter="10rem">
        <ghb-grid-item />
        <ghb-grid-item />
        <ghb-grid-item />
      </ghb-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <ghb-grid icon-size="10">
        <ghb-grid-item icon="success" />
      </ghb-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('render icon-slot', () => {
  const wrapper = mount({
    template: `
      <ghb-grid icon-size="10">
        <ghb-grid-item badge="1">
          <template #icon>
            <div>Custom Icon</div>
          </template>
        </ghb-grid-item>
      </ghb-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
