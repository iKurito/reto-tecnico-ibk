interface RtUserFormArgs {
  uid: string;
  view: boolean;
  btnName: string;
}

/**
 * Componente RtUserForm
 * ---------------------
 * Este componente muestra un formulario para ver, crear o editar un usuario.
 *
 * @element rt-user-form
 *
 * @param {string} uid - El ID del usuario a mostrar, editar o crear. (Opcional)
 * @param {boolean} view - Indica si el formulario está en modo de visualización (solo lectura) o edición. (Opcional)
 * @param {string} btnName - El nombre del botón para enviar el formulario. (Opcional)
 *
 * @example
 * ```html
 * <!-- Ver usuario -->
 * <rt-user-form
 *   uid="64cb37ffba31d9c1c49f51de"
 *   view="true"
 * ></rt-user-form>
 *
 * <!-- Editar usuario -->
 * <rt-user-form
 *   uid="64cb37ffba31d9c1c49f51de"
 *   btn-name="Editar Usuario"
 *   view="false"
 * ></rt-user-form>
 *
 * <!-- Crear usuario -->
 * <rt-user-form
 *   btn-name="Crear Usuario"
 *   view="false"
 * ></rt-user-form>
 * ```
 */
export default {
  title: 'Components/RtUserForm',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este componente muestra un formulario para ver, crear o editar un usuario.',
      },
    },
  },
};

/**
 * Plantilla del componente RtFooter.
 * @param {RtUserFormArgs} args - Los argumentos del componente.
 * @returns {string} El HTML del componente.
 */
const Template = (args: RtUserFormArgs) => `
  <rt-user-form
  uid=${args.uid}
  view=${args.view}
    btn-name=${args.btnName}>
  </rt-user-form>`;

/**
 * Ejemplo del componente RtUserForm para ver un usuario.
 */
export const VerUsuario = Template.bind({});
VerUsuario.args = {
  uid: '64cb37ffba31d9c1c49f51de',
  view: true,
};

/**
 * Ejemplo del componente RtUserForm para editar un usuario.
 */
export const EditarUsuario = Template.bind({});
EditarUsuario.args = {
  uid: '64cb37ffba31d9c1c49f51de',
  btnName: 'Editar Usuario',
  view: false,
};

/**
 * Ejemplo del componente RtUserForm para crear un usuario.
 */
export const CrearUsuario = Template.bind({});
CrearUsuario.args = {
  btnName: 'Crear Usuario',
  view: false,
};
