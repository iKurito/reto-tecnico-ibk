import { Component, h } from '@stencil/core';

@Component({
  tag: 'rt-spinner',
  styleUrl: 'rt-spinner.sass',
  shadow: true,
})
export class RtSpinner {
  render() {
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
