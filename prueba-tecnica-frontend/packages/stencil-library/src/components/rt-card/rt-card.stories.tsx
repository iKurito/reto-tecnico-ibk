interface RtCardArgs {
  names: string;
  surnames: string;
  email: string;
  uid: string;
}

/**
 * Componente RtCard
 * -----------------
 * Este componente muestra una tarjeta con información de un usuario.
 *
 * @element rt-card
 *
 * @param {string} names - Los nombres del usuario.
 * @param {string} surnames - Los apellidos del usuario.
 * @param {string} email - El correo electrónico del usuario.
 * @param {string} uid - El ID único del usuario.
 *
 * @example
 * ```html
 * <rt-card
 *   names="Ronaldo Romario"
 *   surnames="Tunque Cahui"
 *   email="ronaldo.tunque@pucp.edu.pe"
 *   uid="123456789"
 * ></rt-card>
 * ```
 */
export default {
  title: 'Components/RtCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este componente muestra una tarjeta que representa un usuario.',
      },
    },
  },
};

/**
 * Plantilla del componente RtFooter.
 * @param {RtCardArgs} args - Los argumentos del componente.
 * @returns {string} El HTML del componente.
 */
const Template = (args: RtCardArgs) => `
  <rt-card
    names="${args.names}"
    surnames="${args.surnames}"
    email="${args.email}"
    uid="${args.uid}"
  ></rt-card>`;

/**
 * Ejemplo del componente RtCard.
 */
export const Example = Template.bind({});

Example.args = {
  names: 'Ronaldo Romario',
  surnames: 'Tunque Cahui',
  email: 'ronaldo.tunque@pucp.edu.pe',
  uid: '123456789',
};
