interface RtFooterArgs {
  slotContent: string;
}

/**
 * Componente RtFooter
 * -------------------
 * Este componente muestra un pie de página con el contenido proporcionado como slot.
 *
 * @element rt-footer
 *
 * @param {string} slotContent - El contenido que se mostrará dentro del pie de página como slot.
 *
 * @example
 * ```html
 * <rt-footer>
 *   <p>Prueba Técnica</p>
 * </rt-footer>
 * ```
 */
export default {
  title: 'Components/RtFooter',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este componente muestra el footer de la página.',
      },
    },
  },
};

/**
 * Plantilla del componente RtFooter.
 * @param {RtFooterArgs} args - Los argumentos del componente.
 * @returns {string} El HTML del componente.
 */
const Template = (args: RtFooterArgs) => `<rt-footer>${args.slotContent}</rt-footer>`;

/**
 * Ejemplo del componente RtFooter.
 */
export const Example = Template.bind({});
Example.args = {
  slotContent: '<p>Prueba Técnica</p>',
};
