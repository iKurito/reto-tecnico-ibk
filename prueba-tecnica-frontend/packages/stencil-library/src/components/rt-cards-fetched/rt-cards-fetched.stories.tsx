/**
 * Componente RtCardsFetched
 * -----------------------
 * Este componente muestra una lista de tarjetas que representan usuarios.
 *
 * @element rt-cards-fetched
 *
 * @example
 * ```html
 * <rt-cards-fetched></rt-cards-fetched>
 * <p style="margin-top: 10px;">Nota: En caso no se muestre nada, es porque no hay algún usuario creado.</p>
 * ```
 */
export default {
  title: 'Components/RtCardsFetched',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este componente muestra una lista de tarjetas que representan usuarios.',
      },
    },
  },
};

/**
 * Plantilla del componente RtFooter.
 * @returns {string} El HTML del componente.
 */
const Template = () => `
  <rt-cards-fetched></rt-cards-fetched>
  <p style="margin-top: 10px;">Nota: En caso no se muestre nada, es porque no hay algún usuario creado.</p>
`;

/**
 * Ejemplo del componente RtCardsFetcheds.
 */
export const Example = Template.bind({});
