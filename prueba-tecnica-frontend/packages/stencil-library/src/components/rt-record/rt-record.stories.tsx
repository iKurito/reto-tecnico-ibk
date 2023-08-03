interface RtRecordArgs {
  dtime: string;
  names: string;
  surnames: string;
  email: string;
  type: string;
}

/**
 * Componente RtRecord
 * -------------------
 * Este componente muestra un registro con información de un usuario y la acción que se realizó sobre él.
 *
 * @element rt-record
 *
 * @param {string} dtime - La fecha y hora en que se realizó la acción sobre el usuario.
 * @param {string} names - Los nombres del usuario involucrado en el registro.
 * @param {string} surnames - Los apellidos del usuario involucrado en el registro.
 * @param {string} email - El correo electrónico del usuario involucrado en el registro.
 * @param {string} type - El tipo de acción realizada sobre el usuario (por ejemplo, "CREATE", "UPDATE", "DELETE", etc.).
 *
 * @example
 * ```html
 * <rt-record
 *   dtime="25/5/2023 10:00:00"
 *   names="Ronaldo Romario"
 *   surnames="Tunque Cahui"
 *   email="ronaldo.tunque@pucp.edu.pe"
 *   type="CREATE"
 * ></rt-record>
 * ```
 */
export default {
  title: 'Components/RtRecord',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este componente muestra un registro con infomración de un usuario y la acción que se realizó sobre él.',
      },
    },
  },
};

/**
 * Plantilla del componente RtFooter.
 * @param {RtRecordArgs} args - Los argumentos del componente.
 * @returns {string} El HTML del componente.
 */
const Template = (args: RtRecordArgs) => `
  <rt-record
    names=${args.names}
    dTime=${args.dtime}
    surnames=${args.surnames}
    email=${args.email}
    type=${args.type}
  ></rt-record>`;

/**
 * Ejemplo del componente RtRecord.
 */
export const Example = Template.bind({});
Example.args = {
  dtime: '25/5/2023 10:00:00',
  names: 'Ronaldo Romario',
  surnames: 'Tunque Cahui',
  email: 'ronaldo.tunque@pucp.edu.pe',
  type: 'CREATE',
};
