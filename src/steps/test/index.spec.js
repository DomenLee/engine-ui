import { mount } from '../../../test';

test('icon slot', () => {
  const wrapper = mount({
    template: `
    <ghb-steps :active="1">
      <ghb-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        A
      </ghb-step>
      <ghb-step>
        <template v-slot:active-icon>Custim Active Icon</template>
        B
      </ghb-step>
      <ghb-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        C
      </ghb-step>
    </ghb-steps>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('click-step event', () => {
  const onClickStep = jest.fn();
  const wrapper = mount({
    template: `
      <ghb-steps :active="1" @click-step="onClickStep">
        <ghb-step>A</ghb-step>
        <ghb-step>B</ghb-step>
        <ghb-step>C</ghb-step>
      </ghb-steps>
    `,
    methods: {
      onClickStep,
    },
  });

  wrapper.find('.ghb-step').trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(0);

  wrapper.find('.ghb-step__title').trigger('click');
  expect(onClickStep).toHaveBeenCalledWith(0);

  wrapper.findAll('.ghb-step__circle-container').at(2).trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(2);
  expect(onClickStep).toHaveBeenLastCalledWith(2);
});

test('inactive-color prop', () => {
  const wrapper = mount({
    template: `
    <ghb-steps :active="0" inactive-color="red">
      <ghb-step>A</ghb-step>
      <ghb-step>B</ghb-step>
    </ghb-steps>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});
