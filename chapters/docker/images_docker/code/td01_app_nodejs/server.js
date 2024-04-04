// Création d'un serveur HTTP avec Express en NodeJs
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let userGoal = 'Apprendre Docker!!!!!!!!!!!!!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Objectif : </h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Objectif de ce cours : </label>
            <input type="text" name="goal">
          </div>
          <button>Ajouter un objectif !</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});
// Le serveur HTTP démarre et écoute sur le port 80
app.listen(80);
