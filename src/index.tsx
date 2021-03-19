import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({      // Mirage 'fake server' creation and functionalities
  models: {
    transaction: Model,
  },

  seeds(server) {   //Definindo valores iniciais do banco
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Alugel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';    //Definindo o caminho padrão api/

    this.get('/transactions', () => {       //Metodo de pegar info do banco usando get
      return this.schema.all('transaction')    //Retorna tudo q tiver em transactions
    })

    this.post('/transactions', (schema, request) => {   //Posta tudo que tiver no request e guarda na variavel via parse para transformar em JSON
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)  //Coloca no banco 'schema' uma nova celula na parte de transaction, usando os dados de 'data'
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

