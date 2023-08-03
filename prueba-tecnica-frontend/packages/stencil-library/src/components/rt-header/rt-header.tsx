import { Component, h } from '@stencil/core';

@Component({
  tag: 'rt-header',
  styleUrl: 'rt-header.sass',
  shadow: true,
})
export class RtHeader {
  render() {
    return (
      <nav>
        <slot></slot>
      </nav>
    );
  }
}
