import ShareSheet from '..';
import { mount, trigger, later } from '../../../test';

test('cancel-text prop', () => {
  const wrapper = mount(ShareSheet, {
    propsData: {
      value: true,
      cancelText: 'foo',
    },
  });

  expect(wrapper.find('.ghb-share-sheet__cancel')).toMatchSnapshot();

  wrapper.setProps({ cancelText: '' });
  expect(wrapper.contains('.ghb-share-sheet__cancel')).toBeFalsy();
});

test('description prop', () => {
  const wrapper = mount(ShareSheet, {
    propsData: {
      value: true,
      description: 'foo',
    },
  });

  expect(wrapper.find('.ghb-share-sheet__description')).toMatchSnapshot();

  wrapper.setProps({ description: '' });
  expect(wrapper.contains('.ghb-share-sheet__description')).toBeFalsy();
});

test('option className', () => {
  const wrapper = mount(ShareSheet, {
    propsData: {
      value: true,
      options: [{ name: 'Link', icon: 'link', className: 'foo' }],
    },
  });

  const option = wrapper.find('.ghb-share-sheet__option').element;

  expect(option.className.includes('foo')).toBeTruthy();
});

test('select event', () => {
  const wrapper = mount(ShareSheet, {
    propsData: {
      value: true,
      options: [{ icon: 'wechat', name: 'wechat' }],
    },
  });

  wrapper.find('.ghb-share-sheet__option').trigger('click');
  expect(wrapper.emitted('select')[0]).toEqual([
    { icon: 'wechat', name: 'wechat' },
    0,
  ]);
});

test('cancel event', () => {
  const wrapper = mount(ShareSheet, {
    propsData: {
      value: true,
    },
  });

  wrapper.find('.ghb-share-sheet__cancel').trigger('click');

  expect(wrapper.emitted('input')[0][0]).toEqual(false);
  expect(wrapper.emitted('cancel')[0]).toBeTruthy();
});

test('title & description slot', () => {
  const wrapper = mount(ShareSheet, {
    propsData: {
      value: true,
    },
    scopedSlots: {
      title: () => 'Custom Title',
      description: () => 'Custom Description',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('click-overlay event', async () => {
  const root = document.createElement('div');
  const wrapper = mount(ShareSheet, {
    propsData: {
      value: true,
      getContainer: () => root,
    },
  });

  await later();

  const overlay = root.querySelector('.ghb-overlay');
  trigger(overlay, 'click');
  expect(wrapper.emitted('click-overlay')).toBeTruthy();
});
