import { Component, State, h } from '@stencil/core';

interface CardData {
  uid: string;
  names: string;
  surnames: string;
  email: string;
}

@Component({
  tag: 'rt-cards-fetched',
  styleUrl: 'rt-cards-fetched.sass',
})
export class RtCardsFetched {
  @State() cardsData: CardData[] = [];

  componentDidLoad() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8080/api/v1/users')
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Falló la petición');
        }
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes) {
          throw new Error('No hay datos');
        }
        this.cardsData = parsedRes.users;
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return [this.cardsData.map(card => <rt-card names={card.names} surnames={card.surnames} email={card.email} uid={card.uid}></rt-card>)];
  }
}
