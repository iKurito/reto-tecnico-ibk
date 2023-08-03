interface RtUserFormArgs {
  uid: string;
  view: boolean;
  btnName: string;
}

export default {
  title: 'Components/RtUserForm',
  tags: ['autodocs'],
};

const Template = (args: RtUserFormArgs) => `
  <rt-user-form
  uid=${args.uid}
  view=${args.view}
    btn-name=${args.btnName}>
  </rt-user-form>`;

export const VerUsuario = Template.bind({});

VerUsuario.args = {
  uid: '64cb37ffba31d9c1c49f51de',
  view: true,
};

export const EditarUsuario = Template.bind({});

EditarUsuario.args = {
  uid: '64cb37ffba31d9c1c49f51de',
  btnName: 'Editar Usuario',
  view: false,
};

export const CrearUsuario = Template.bind({});

CrearUsuario.args = {
  btnName: 'Crear Usuario',
  view: false,
};
