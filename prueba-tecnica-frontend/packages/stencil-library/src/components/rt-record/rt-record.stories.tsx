interface RtRecordArgs {
  date: string;
  names: string;
  surnames: string;
  email: string;
  type: string;
  uid: string;
}

export default {
  title: 'Components/RtRecord',
};

const Template = (args: RtRecordArgs) => `
  <rt-record
    date="${args.date}"
    names="${args.names}"
    surnames="${args.surnames}"
    email="${args.email}"
    type="${args.type}"
    uid="${args.uid}"
  ></rt-record>`;

export const Example = Template.bind({});

Example.args = {
  date: '2021-09-01',
  names: 'Ronaldo Romario',
  surnames: 'Tunque Cahui',
  email: 'ronaldo.tunque@pucp.edu.pe',
  type: 'CREATE',
  uid: '123456789',
};
