import { Component, h } from '@stencil/core';

@Component({
  tag: 'rt-footer',
  styleUrl: 'rt-footer.sass',
  shadow: true,
})
export class RtFooter {
  render() {
    return (
      <footer>
        <slot></slot>
        <p>&copy; 2023 - Hecho por Ronaldo Romario Tunque Cahui</p>
      </footer>
    );
  }
}
