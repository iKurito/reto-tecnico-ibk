interface RtFooterArgs {
  slotContent: string;
}

export default {
  title: 'Components/RtFooter',
  tags: ['autodocs'],
};

const Template = (args: RtFooterArgs) => `<rt-footer>${args.slotContent}</rt-footer>`;

export const Example = Template.bind({});

Example.args = {
  slotContent: '<p>Prueba Técnica</p>',
};
