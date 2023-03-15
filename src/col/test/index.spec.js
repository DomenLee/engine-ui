import Col from '..';
import Row from '../../row';
import { mount } from '../../../test';

test('Col click event', () => {
  const wrapper = mount(Col);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});

test('Row click event', () => {
  const wrapper = mount(Row);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});

test('gutter prop', () => {
  const wrapper = mount({
    template: `
      <ghb-row gutter="24">
        <ghb-col span="24">24</ghb-col>

        <ghb-col span="12">12</ghb-col>
        <ghb-col span="12">12</ghb-col>

        <ghb-col span="8">8</ghb-col>
        <ghb-col span="8">8</ghb-col>
        <ghb-col span="8">8</ghb-col>

        <ghb-col span="6">6</ghb-col>
        <ghb-col span="6">6</ghb-col>
        <ghb-col span="6">6</ghb-col>
        <ghb-col span="6">6</ghb-col>
        
        <ghb-col span="7">7</ghb-col>
        <ghb-col span="6">6</ghb-col>
        <ghb-col span="5">5</ghb-col>
        <ghb-col span="4">4</ghb-col>
        <ghb-col span="3">3</ghb-col>
        <ghb-col span="2">2</ghb-col>
      </ghb-row>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
