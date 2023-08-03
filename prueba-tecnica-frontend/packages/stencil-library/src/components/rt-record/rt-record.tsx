import { Component, Prop, h } from '@stencil/core';
import { RecordType } from '../../data/record.data';

@Component({
  tag: 'rt-record',
  styleUrl: 'rt-record.sass',
  shadow: true,
})
export class RtRecord {
  @Prop() fecha: string;
  @Prop() names: string;
  @Prop() surnames: string;
  @Prop() email: string;
  @Prop() type: RecordType;

  render() {
    return (
      <div class="card">
        <div class="header">
          <h2>Constancia de Operación</h2>
        </div>
        <div class="content">
          <p>
            <strong>Tipo:</strong>: {this.type}
          </p>
          <p>
            <strong>Fecha:</strong> {this.fecha}
          </p>
          <p>
            <strong>Nombre:</strong> {this.names} {this.surnames}
          </p>
          <p>
            <strong>Email:</strong> {this.email}
          </p>
        </div>
      </div>
    );
  }
}
