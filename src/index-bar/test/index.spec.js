import { mount, trigger, triggerDrag, mockScrollIntoView } from '../../../test';

test('should allow to custom anchor text', () => {
  const wrapper = mount({
    template: `
      <ghb-index-bar>
        <ghb-index-anchor index="A">Title A</ghb-index-anchor>
        <ghb-index-anchor index="B">Title B</ghb-index-anchor>
      </ghb-index-bar>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('should scroll to anchor and emit select event after clicking the index-bar', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-index-bar @select="onSelect">
        <ghb-index-anchor index="A" />
        <ghb-index-anchor index="B" />
      </ghb-index-bar>
    `,
    methods: {
      onSelect,
    },
  });

  const fn = mockScrollIntoView();
  const indexes = wrapper.findAll('.ghb-index-bar__index');
  indexes.at(0).trigger('click');

  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('A');
});

test('should scroll to anchor after touching the index-bar', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-index-bar @select="onSelect">
        <ghb-index-anchor index="A" />
        <ghb-index-anchor index="B" />
        <ghb-index-anchor index="XXX" />
      </ghb-index-bar>
    `,
    methods: {
      onSelect,
    },
  });

  const fn = mockScrollIntoView();
  const sidebar = wrapper.find('.ghb-index-bar__sidebar');
  const indexes = wrapper.findAll('.ghb-index-bar__index');

  document.elementFromPoint = function (x, y) {
    const index = y / 100;

    if (index === 1 || index === 2) {
      return indexes.at(index).element;
    }

    if (index === 3) {
      return {
        dataset: {},
      };
    }
  };

  // horizontal drag
  triggerDrag(sidebar, 100, 0);
  expect(fn).toHaveBeenCalledTimes(0);

  // vertical drag
  trigger(sidebar, 'touchstart', 0, 0);
  trigger(sidebar, 'touchmove', 0, 100);
  trigger(sidebar, 'touchmove', 0, 200);
  trigger(sidebar, 'touchmove', 0, 300);
  trigger(sidebar, 'touchmove', 0, 400);
  trigger(sidebar, 'touchend', 0, 400);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('B');
});

test('should update active anchor after page scroll', () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function () {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0,
      height: 10,
    };
  };

  const wrapper = mount({
    template: `
      <ghb-index-bar :sticky="sticky">
        <ghb-index-anchor
          v-for="index in 4"
          :key="index"
          :index="index"
          :data-index="index - 1"
        />
      </ghb-index-bar>
    `,
    data() {
      return {
        sticky: false,
      };
    },
  });

  window.scrollTop = 0;
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();

  wrapper.setData({ sticky: true });
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();
  wrapper.vm.$destroy();

  Element.prototype.getBoundingClientRect = nativeRect;
});

test('should emit change event when active index changed', () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function () {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0,
      height: 10,
    };
  };

  const onChange = jest.fn();

  mount({
    template: `
      <ghb-index-bar @change="onChange">
        <ghb-index-anchor
          v-for="index in 4"
          :key="index"
          :index="index"
          :data-index="index - 1"
        />
      </ghb-index-bar>
    `,
    methods: {
      onChange,
    },
  });

  window.scrollTop = 0;
  trigger(window, 'scroll');
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith('B');

  window.scrollTop = 100;
  trigger(window, 'scroll');
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith('D');

  Element.prototype.getBoundingClientRect = nativeRect;
});
