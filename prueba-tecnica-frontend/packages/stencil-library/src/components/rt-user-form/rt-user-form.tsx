import { Component, Prop, State, h } from '@stencil/core';

interface User {
  names: string;
  surnames: string;
  email: string;
  address: string;
  dni: string;
  description: string;
  phone: string;
}

@Component({
  tag: 'rt-user-form',
  styleUrl: 'rt-user-form.sass',
  shadow: true,
})
export class RtUserForm {
  @State() user: User = {
    names: '',
    surnames: '',
    email: '',
    address: '',
    dni: '',
    description: '',
    phone: '',
  };

  @State() loading = false;

  @State() disabled = false;

  @State() message: string = '';

  @State() error = false;

  @Prop() uid: string;

  @Prop({ reflect: true, mutable: true }) view: boolean = false;

  @Prop() btnName: string = '';

  componentWillLoad() {
    if (this.uid) {
      this.fetchData();
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.uid) {
      this.updateUser();
      setTimeout(() => {
        this.message = '';
      }, 2000);
    } else {
      this.createUser();
      this.disabled = true;
      setTimeout(() => {
        this.user = {
          names: '',
          surnames: '',
          email: '',
          address: '',
          dni: '',
          description: '',
          phone: '',
        };
        this.message = '';
        this.disabled = false;
      }, 2000);
    }
  }

  createUser() {
    this.loading = true;
    fetch('http://localhost:8080/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(this.user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Error');
        }
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes) {
          throw new Error('Error');
        }
        this.user = parsedRes;
        this.loading = false;
        this.message = 'Usuario creado correctamente';
        this.error = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
        this.message = 'Error al crear el usuario';
        this.error = true;
      });
  }

  updateUser() {
    this.loading = true;
    fetch(`http://localhost:8080/api/v1/users/${this.uid}`, {
      method: 'PATCH',
      body: JSON.stringify(this.user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Error');
        }
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes) {
          throw new Error('Error');
        }
        this.user = parsedRes;
        this.loading = false;
        this.message = 'Usuario actualizado correctamente';
        this.error = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
        this.message = 'Error al actualizar el usuario';
        this.error = true;
      });
  }

  onUserInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.user[input.name] = input.value;
  }

  fetchData() {
    this.loading = true;
    fetch(`http://localhost:8080/api/v1/users/${this.uid}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Error');
        }
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes) {
          throw new Error('Error');
        }
        this.user = parsedRes;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      });
  }

  render() {
    let content = null;

    if (this.loading) {
      return <rt-spinner />;
    }

    if (!this.view) {
      content = (
        <button type="submit" disabled={this.disabled}>
          {this.btnName}
        </button>
      );
    }

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label htmlFor="names">Nombres:</label>
          <input type="text" id="names" name="names" required value={this.user.names} onInput={this.onUserInput.bind(this)} disabled={this.view || this.disabled} />
        </div>
        <div>
          <label htmlFor="surnames">Apellidos:</label>
          <input type="text" id="surnames" name="surnames" required value={this.user.surnames} onInput={this.onUserInput.bind(this)} disabled={this.view || this.disabled} />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="text" id="email" name="email" required value={this.user.email} onInput={this.onUserInput.bind(this)} disabled={this.view || this.disabled} />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input type="text" id="address" name="address" required value={this.user.address} onInput={this.onUserInput.bind(this)} disabled={this.view || this.disabled} />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input type="number" id="dni" name="dni" required value={this.user.dni} onInput={this.onUserInput.bind(this)} disabled={this.view || this.disabled} />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea cols={4} id="description" name="description" value={this.user.description} onInput={this.onUserInput.bind(this)} disabled={this.view || this.disabled} />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" required value={this.user.phone} onInput={this.onUserInput.bind(this)} disabled={this.view || this.disabled} />
        </div>
        <p class={this.error ? 'error' : 'success'}>{this.message}</p>
        {content}
        <a href="/users/list">Regresar</a>
      </form>
    );
  }
}