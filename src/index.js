const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log("Server is listen on port 3000");
});


//import routes from './routes';

/* class Index {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    //this.server.use(routes);
  }
}

export default new Index().server;
 */