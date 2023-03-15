import { mount, triggerDrag, later, trigger } from '../../../test';

function mockPageHidden() {
  let hidden = true;

  Object.defineProperty(document, 'hidden', {
    get: () => hidden,
  });

  trigger(window, 'visibilitychange');
  hidden = false;
}

const Component = {
  template: `
    <ghb-swipe ref="swipe" v-bind="$props" v-on="$listeners">
      <ghb-swipe-item :style="style">1</ghb-swipe-item>
      <ghb-swipe-item :style="style">2</ghb-swipe-item>
      <ghb-swipe-item :style="style">3</ghb-swipe-item>
    </ghb-swipe>
  `,
  props: {
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true,
    },
    touchable: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Number,
      default: 0,
    },
    initialSwipe: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      style: {
        width: '100px',
        height: '100px',
      },
    };
  },
};

test('swipeTo method', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  swipe.swipeTo(2);

  await later(100);
  expect(swipe.active).toEqual(2);
});

test('swipeTo method with immediate option', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  swipe.swipeTo(2, {
    immediate: true,
  });

  await later(100);
  expect(swipe.active).toEqual(2);
});

test('prev and next method', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;

  swipe.next();
  await later(50);
  expect(swipe.active).toEqual(1);

  swipe.prev();
  await later(50);
  expect(swipe.active).toEqual(0);
});

test('initial swipe', () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;

  expect(swipe.active).toEqual(0);
  wrapper.setProps({ initialSwipe: 2 });
  expect(swipe.active).toEqual(2);
});

test('vertical swipe', () => {
  const wrapper = mount(Component, {
    propsData: {
      vertical: true,
    },
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.ghb-swipe__track');

  triggerDrag(track, 0, -100);
  expect(swipe.active).toEqual(1);
});

test('untouchable', () => {
  const wrapper = mount(Component, {
    propsData: {
      touchable: false,
    },
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.ghb-swipe__track');

  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(0);
});

test('loop', () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.ghb-swipe__track');

  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(2);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(3);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(0);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(-1);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(1);
});

test('should pause auto play when page hidden', async () => {
  const change = jest.fn();
  mount(Component, {
    propsData: {
      loop: true,
      autoplay: 1,
    },
    listeners: {
      change,
    },
  });

  mockPageHidden();
  await later(50);

  expect(change).toHaveBeenCalledTimes(0);
});

test('lazy-render prop', async () => {
  const wrapper = mount({
    template: `
      <ghb-swipe :initial-swipe="active" lazy-render>
        <ghb-swipe-item><span>1</span></ghb-swipe-item>
        <ghb-swipe-item><span>2</span></ghb-swipe-item>
        <ghb-swipe-item><span>3</span></ghb-swipe-item>
        <ghb-swipe-item><span>4</span></ghb-swipe-item>
        <ghb-swipe-item><span>5</span></ghb-swipe-item>
      </ghb-swipe>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  await later();
  const items = wrapper.findAll('.ghb-swipe-item');

  const expectRender = (results) => {
    results.forEach((result, index) => {
      expect(items.at(index).contains('span')).toEqual(result);
    });
  };

  expectRender([true, true, false, false, true]);

  wrapper.setData({ active: 1 });
  expectRender([true, true, true, false, true]);

  wrapper.setData({ active: 2 });
  expectRender([true, true, true, true, true]);
});

test('lazy-render prop when loop is false', async () => {
  const wrapper = mount({
    template: `
      <ghb-swipe :initial-swipe="active" :loop="false" lazy-render>
        <ghb-swipe-item><span>1</span></ghb-swipe-item>
        <ghb-swipe-item><span>2</span></ghb-swipe-item>
        <ghb-swipe-item><span>3</span></ghb-swipe-item>
        <ghb-swipe-item><span>4</span></ghb-swipe-item>
      </ghb-swipe>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  await later();
  const items = wrapper.findAll('.ghb-swipe-item');

  const expectRender = (results) => {
    results.forEach((result, index) => {
      expect(items.at(index).contains('span')).toEqual(result);
    });
  };

  expectRender([true, true, false, false]);

  wrapper.setData({ active: 1 });
  expectRender([true, true, true, false]);

  wrapper.setData({ active: 2 });
  expectRender([true, true, true, true]);
});
