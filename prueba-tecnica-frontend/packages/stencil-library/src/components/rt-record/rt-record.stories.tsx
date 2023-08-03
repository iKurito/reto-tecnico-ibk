interface RtRecordArgs {
  dtime: string;
  names: string;
  surnames: string;
  email: string;
  type: string;
}

export default {
  title: 'Components/RtRecord',
  tags: ['autodocs'],
};

const Template = (args: RtRecordArgs) => `
  <rt-record
    names=${args.names}
    dTime=${args.dtime}
    surnames=${args.surnames}
    email=${args.email}
    type=${args.type}
  ></rt-record>`;

export const Example = Template.bind({});

Example.args = {
  dtime: '25/5/2023 10:00:00',
  names: 'Ronaldo Romario',
  surnames: 'Tunque Cahui',
  email: 'ronaldo.tunque@pucp.edu.pe',
  type: 'CREATE',
};
