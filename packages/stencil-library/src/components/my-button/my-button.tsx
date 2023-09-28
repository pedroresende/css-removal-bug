import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: false,
})
export class MyButton {
  render() {
    return (
      <Host class="button">
        <slot></slot>
      </Host>
    );
  }
}
