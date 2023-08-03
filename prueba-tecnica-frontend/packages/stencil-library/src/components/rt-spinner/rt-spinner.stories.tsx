/**
 * Componente RtSpinner
 * --------------------
 * Este componente muestra un spinner de carga.
 *
 * @element rt-spinner
 *
 * @example
 * ```html
 * <rt-spinner></rt-spinner>
 * ```
 */
export default {
  title: 'Components/RtSpinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este componente muestra un spinner.',
      },
    },
  },
};

/**
 * Plantilla del componente RtFooter.
 * @returns {string} El HTML del componente.
 */
const Template = () => `<rt-spinner></rt-spinner>`;

/**
 * Ejemplo del componente RtSpinner.
 */
export const Example = Template.bind({});
