interface RtHeaderArgs {
  slotContent: string;
}

/**
 * Componente RtHeader
 * -------------------
 * Este componente muestra un encabezado con el contenido proporcionado como slot.
 *
 * @element rt-header
 *
 * @param {string} slotContent - El contenido que se mostrará dentro del encabezado como slot.
 *
 * @example
 * ```html
 * <rt-header>
 *   <p>Prueba Técnica</p>
 * </rt-header>
 * ```
 */
export default {
  title: 'Components/RtHeader',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este componente muestra un header.',
      },
    },
  },
};

/**
 * Plantilla del componente RtFooter.
 * @param {RtHeaderArgs} args - Los argumentos del componente.
 * @returns {string} El HTML del componente.
 */
const Template = (args: RtHeaderArgs) => `<rt-header>${args.slotContent}</rt-header>`;

/**
 * Ejemplo del componente RtHeader.
 */
export const Example = Template.bind({});
Example.args = {
  slotContent: '<p>Prueba Técnica</p>',
};
