interface RtCardArgs {
  names: string;
  surnames: string;
  email: string;
  uid: string;
}

export default {
  title: 'Components/RtCard',
  tags: ['autodocs'],
};

const Template = (args: RtCardArgs) => `
  <rt-card
    names="${args.names}"
    surnames="${args.surnames}"
    email="${args.email}"
    uid="${args.uid}"
  ></rt-card>`;

export const Example = Template.bind({});

Example.args = {
  names: 'Ronaldo Romario',
  surnames: 'Tunque Cahui',
  email: 'ronaldo.tunque@pucp.edu.pe',
  uid: '123456789',
};
