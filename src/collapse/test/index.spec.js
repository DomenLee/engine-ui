import Collapse from '..';
import CollapseItem from '../../collapse-item';
import { later, mount } from '../../../test';

const component = {
  template: `
  <ghb-collapse v-model="active" :accordion="accordion" :border="border">
    <ghb-collapse-item title="a" name="first">content</ghb-collapse-item>
    <ghb-collapse-item title="b">content</ghb-collapse-item>
    <ghb-collapse-item title="c">content</ghb-collapse-item>
  </ghb-collapse>
  `,
  props: {
    accordion: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: this.accordion ? '' : [],
    };
  },
};

test('basic mode', async () => {
  const wrapper = mount(component);

  const titles = wrapper.findAll('.ghb-collapse-item__title');
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual(['first']);

  await later();
  titles.at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(['first', 1]);

  await later();
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual([1]);

  wrapper.destroy();
});

test('accordion', async () => {
  const wrapper = mount(component, {
    propsData: {
      accordion: true,
    },
  });

  const titles = wrapper.findAll('.ghb-collapse-item__title');
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  titles.at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);

  await later();
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('');
});

test('render collapse-item slot', () => {
  const wrapper = mount({
    template: `
      <ghb-collapse v-model="active">
        <ghb-collapse-item>
          <template v-slot:title>this is title</template>
          <template v-slot:value>this is value</template>
          <template v-slot:icon>this is icon</template>
          <template v-slot:right-icon>this is right icon</template>
        </ghb-collapse-item>
      </ghb-collapse>
      `,
    data() {
      return {
        active: [],
      };
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('disable border', () => {
  const wrapper = mount(component, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('lazy render collapse content', async () => {
  const wrapper = mount({
    template: `
      <collapse v-model="active">
        <collapse-item title="a" name="first" style="padding: 0;">content</collapse-item>
        <collapse-item title="b" style="padding: 0;">{{ content }}</collapse-item>
      </collapse>
    `,
    components: {
      Collapse,
      CollapseItem,
    },
    data() {
      return {
        content: '',
        active: [],
      };
    },
  });

  const titles = wrapper.findAll('.ghb-collapse-item__title');

  titles.at(1).trigger('click');
  wrapper.vm.content = 'content';
  expect(wrapper).toMatchSnapshot();
});

test('toggle method', (done) => {
  mount({
    template: `
    <ghb-collapse v-model="active" >
      <ghb-collapse-item name="a" ref="a" />
      <ghb-collapse-item name="b" ref="b" />
    </ghb-collapse>
  `,
    data() {
      return { active: [] };
    },
    mounted() {
      this.$refs.a.toggle();
      expect(this.active).toEqual(['a']);

      this.$refs.b.toggle();
      expect(this.active).toEqual(['a', 'b']);

      this.$refs.b.toggle(false);
      expect(this.active).toEqual(['a']);

      this.$refs.a.toggle();
      expect(this.active).toEqual([]);

      done();
    },
  });
});

test('toggle method in accordion mode', (done) => {
  mount({
    template: `
    <ghb-collapse v-model="active" accordion>
      <ghb-collapse-item name="a" ref="a" />
      <ghb-collapse-item name="b" ref="b" />
    </ghb-collapse>
  `,
    data() {
      return { active: '' };
    },
    mounted() {
      this.$refs.a.toggle();
      expect(this.active).toEqual('a');

      this.$refs.b.toggle();
      expect(this.active).toEqual('b');

      this.$refs.b.toggle(false);
      expect(this.active).toEqual('');

      this.$refs.a.toggle();
      expect(this.active).toEqual('a');

      done();
    },
  });
});
