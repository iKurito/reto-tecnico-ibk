import { Component, Prop, h } from '@stencil/core';
import { RecordType } from '../../data/record.data';
import { IRecord } from '../../interfaces/record.interface';

@Component({
  tag: 'rt-card',
  styleUrl: 'rt-card.sass',
  shadow: true,
})
export class RtCard {
  @Prop() names: string;

  @Prop() surnames: string;

  @Prop() email: string;

  @Prop() uid: string;

  onClick() {
    this.deleteUser(this.uid);
  }

  deleteUser(id: string) {
    fetch(`http://localhost:8080/api/v1/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Error');
        }
        this.updateRecords(RecordType.DELETE);
        window.location.reload();
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateRecords(type: RecordType) {
    const records: IRecord[] = JSON.parse(localStorage.getItem('records')) ?? [];
    records.push({
      id: this.uid,
      names: this.names,
      surnames: this.surnames,
      email: this.email,
      type: type,
      dtime: new Date().toLocaleDateString('es-PE') + ' ' + new Date().toLocaleTimeString('es-PE'),
    });
    localStorage.setItem('records', JSON.stringify(records));
  }

  render() {
    return (
      <div class="card">
        <div class="body">
          <div>
            <div>
              <strong>Names:</strong> {this.names}
            </div>
            <div>
              <strong>Surnames:</strong> {this.surnames}
            </div>
            <div>
              <strong>Email:</strong> {this.email}
            </div>
          </div>
          <button type="button" class="svg-container" onClick={this.onClick.bind(this)} title="Eliminar">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={24} height={24} viewBox="0 0 482.428 482.429">
              <path d="M381.163 57.799h-75.094C302.323 25.316 274.686 0 241.214 0c-33.471 0-61.104 25.315-64.85 57.799h-75.098c-30.39 0-55.111 24.728-55.111 55.117v2.828c0 23.223 14.46 43.1 34.83 51.199v260.369c0 30.39 24.724 55.117 55.112 55.117h210.236c30.389 0 55.111-24.729 55.111-55.117V166.944c20.369-8.1 34.83-27.977 34.83-51.199v-2.828c0-30.39-24.723-55.118-55.111-55.118zm-139.949-31.66c19.037 0 34.927 13.645 38.443 31.66h-76.879c3.515-18.016 19.406-31.66 38.436-31.66zm134.091 401.173c0 15.978-13 28.979-28.973 28.979H136.096c-15.973 0-28.973-13.002-28.973-28.979V170.861h268.182v256.451zm34.83-311.568c0 15.978-13 28.979-28.973 28.979H101.266c-15.973 0-28.973-13.001-28.973-28.979v-2.828c0-15.978 13-28.979 28.973-28.979h279.897c15.973 0 28.973 13.001 28.973 28.979v2.828z" />
              <path d="M171.144 422.863c7.218 0 13.069-5.853 13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07-7.217 0-13.069 5.854-13.069 13.07v147.154c-.001 7.217 5.851 13.068 13.069 13.068zM241.214 422.863c7.218 0 13.07-5.853 13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07-7.217 0-13.069 5.854-13.069 13.07v147.154c0 7.217 5.851 13.068 13.069 13.068zM311.284 422.863c7.217 0 13.068-5.853 13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07-7.219 0-13.07 5.854-13.07 13.07v147.154c-.001 7.217 5.853 13.068 13.07 13.068z" />
            </svg>
          </button>
        </div>
        <div class="btn-container">
          <a href={`users/edit/${this.uid}`}>Editar</a>
          <a href={`users/${this.uid}`}>Ver</a>
        </div>
      </div>
    );
  }
}
