const express = require("express");
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
// const routes = require('./controllers');
const apiRoutes = require("./routes/apiRoutes");
const db = require("./db/connection");
const hbs = exphbs.create({});
const session = require('express.session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: '',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//turn on routes
app.use("/api", apiRoutes);

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// turn on connection to db and server
// sequelize.sync({ force:false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });

app.use((req, res) => {
  res.status(404).end();
});

db.connect((err) => {
  if (err) throw err;
  console.log("DataBase CONNECTED");
  app.listen(PORT, () => {
    console.log(`Server ONLINE, listening to ${PORT}`);
  });
});
