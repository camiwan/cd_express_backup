// eslint-disable-next-line
import dotenv from 'dotenv';
dotenv.config();

import './src/database';
import express from 'express';
import landingPageRoutes from './src/routes/landingPageRoutes';
import adminRoutes from './src/routes/adminRoutes';
import empresaRoutes from './src/routes/empresaRoutes'
import loginRoutes from './src/routes/loginRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import entregadorRouter from './src/routes/entregadorRoutes';
import coletaRouter from './src/routes/coletaRoutes';
import coletaEntregadorRouter from './src/routes/coletaEntregadorRoutes';
import path from 'path';
import flash from 'connect-flash';
import csrf from 'csurf';
import session from 'express-session';
import { runInThisContext } from 'vm';
import ColetaController from './src/controllers/ColetaController';

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');


//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from './swagger.json';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config(){
    this.app.use(flash());
    this.app.set('views', path.resolve(__dirname, 'src', 'views'));
    this.app.use(express.static(path.resolve(__dirname, 'public')));
    this.app.set('view engine', 'ejs');
    this.app.use(session({
      resave: true,
      saveUninitialized: true,
      secret:"secret_secret_secret",
      cookie: { secure: false, maxAge: 14400000 },
    }));
   //  this.app.use(csrf());


  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    //this.app.use(middlewareGlobal);
    //this.app.use(checkCsrfError);
    //this.app.use(csrfMiddleware);
  }

  routes() {
    //this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.app.use('/', landingPageRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/admin', adminRoutes);

    this.app.use('/admin/api/empresas/', empresaRoutes );
    this.app.use('/admin/api/usuarios/', usuarioRoutes);
    this.app.use('/admin/api/entregadores/', entregadorRouter);
    this.app.use('/admin/api/coletas/', coletaRouter);
    this.app.use('/admin/api/coletas-entregadores/', coletaEntregadorRouter);


  }

}

export default new App().app;
