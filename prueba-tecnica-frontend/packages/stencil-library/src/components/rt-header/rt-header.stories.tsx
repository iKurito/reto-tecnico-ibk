interface RtHeaderArgs {
  slotContent: string;
}

export default {
  title: 'Components/RtHeader',
  tags: ['autodocs'],
};

const Template = (args: RtHeaderArgs) => `<rt-header>${args.slotContent}</rt-header>`;

export const Example = Template.bind({});

Example.args = {
  slotContent: '<p>Prueba Técnica</p>',
};
