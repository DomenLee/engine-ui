import VueRouter from 'vue-router';
import { later, mockGetBoundingClientRect, mount } from '../../../test';
import Vue from 'vue';
import Tabbar from '..';
import { createLocalVue } from '@vue/test-utils';

Vue.use(VueRouter);

test('route mode', async () => {
  const router = new VueRouter({
    routes: [
      { path: '/', component: { render: () => '/' } },
      { path: '/search', component: { render: () => '/search' } },
      { path: '/star', component: { render: () => '/star' } },
    ],
  });
  const localVue = createLocalVue();
  localVue.use(VueRouter);

  const wrapper = mount(
    {
      template: `
      <ghb-tabbar route>
        <ghb-tabbar-item replace to="/">
          Tab
        </ghb-tabbar-item>
        <ghb-tabbar-item replace to="/search">
          Tab
        </ghb-tabbar-item>
        <ghb-tabbar-item replace :to="{ path: '/star' }">
          Tab
        </ghb-tabbar-item>
        <ghb-tabbar-item>
          Tab
        </ghb-tabbar-item>
      </ghb-tabbar>
    `,
    },
    { localVue, router }
  );

  expect(wrapper).toMatchSnapshot();

  const items = wrapper.findAll('.ghb-tabbar-item');

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(2).trigger('click');
  items.at(3).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('route mode match by name', async () => {
  const Foo = { render: () => 'Foo' };
  const Bar = { render: () => 'Bar' };
  const router = new VueRouter({
    routes: [
      { path: '/foo', component: Foo, name: 'foo' },
      { path: '/bar', component: Bar, name: 'bar' },
    ],
  });

  const wrapper = mount({
    router,
    template: `
      <ghb-tabbar route>
        <ghb-tabbar-item :to="{ name: 'foo' }">
          Tab
        </ghb-tabbar-item>
        <ghb-tabbar-item :to="{ name: 'bar' }">
          Tab
        </ghb-tabbar-item>
      </ghb-tabbar>
    `,
  });

  const items = wrapper.findAll('.ghb-tabbar-item');
  items.at(0).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('router NavigationDuplicated', async (done) => {
  expect(async () => {
    const router = new VueRouter();
    const wrapper = mount({
      router,
      template: `
      <ghb-tabbar route>
        <ghb-tabbar-item replace to="/home">
          Tab
        </ghb-tabbar-item>
      </ghb-tabbar>
    `,
    });

    const item = wrapper.find('.ghb-tabbar-item');
    item.trigger('click');
    item.trigger('click');

    await later();
    done();
  }).not.toThrow();
});

test('watch tabbar value', () => {
  const wrapper = mount({
    template: `
      <ghb-tabbar :value="value">
        <ghb-tabbar-item>Tab</ghb-tabbar-item>
        <ghb-tabbar-item>Tab</ghb-tabbar-item>
      </ghb-tabbar>
    `,
    data() {
      return {
        value: 0,
      };
    },
  });

  wrapper.setData({ value: 1 });
  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <ghb-tabbar @change="onChange">
        <ghb-tabbar-item @click="onClick">Tab</ghb-tabbar-item>
      </ghb-tabbar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.find('.ghb-tabbar-item').trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('name prop', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-tabbar :value="value" @change="onChange">
        <ghb-tabbar-item name="a">Tab</ghb-tabbar-item>
        <ghb-tabbar-item name="b">Tab</ghb-tabbar-item>
      </ghb-tabbar>
    `,
    data() {
      return {
        value: 'a',
      };
    },
    methods: {
      onChange,
    },
  });

  wrapper.findAll('.ghb-tabbar-item').at(1).trigger('click');

  expect(onChange).toHaveBeenCalledWith('b');
});

test('disable border', () => {
  const wrapper = mount(Tabbar, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('placeholder prop', () => {
  const restore = mockGetBoundingClientRect({ height: 50 });

  const wrapper = mount(Tabbar, {
    propsData: {
      fixed: true,
      placeholder: true,
    },
  });

  expect(wrapper).toMatchSnapshot();

  restore();
});
