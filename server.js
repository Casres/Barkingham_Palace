const path = require('path');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// handlebars config
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(_dirname, 'public')));

// turns on routes
app.use(routes);

// turns on connection to server 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`SERVE ONLINE, now listening to PORT ${PORT}`));
});
