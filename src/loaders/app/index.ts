import cors from 'cors';
import express, { Application, Request, Response, Router } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { createServer } from 'http';
import { logger } from '../../utils/logger';

const PORT: number = Number(process.env.PORT) || 3000;
const HOST: string = process.env.HOST || '0.0.0.0';

/**
 * Initializes and configures the Express application.
 * @param app - Express application instance.
 * @param router - Express router instance.
 * @returns Promise<boolean> - Resolves when the server starts successfully.
 */
const appLoader = (app: Application, router: Router): Promise<boolean> =>
  new Promise((resolve) => {
    const server = createServer(app);

    // Adding Helmet to enhance Rest API's security
    app.use(helmet());
    app.use(
      cors({
        origin: true,
      }),
    );
    app.use(
      express.json({
        limit: '10mb',
      }),
    );

    app.use(
      express.urlencoded({
        extended: true,
      }),
    );
    app.use(morgan('dev'));
    app.use('/aggregation', router);
    app.use((req: Request, res: Response) => {
      res.status(404).send({
        success: false,
        data: null,
        message: 'The resource you are looking for is not found.',
      });
    });

    server.listen(PORT, HOST, () => {
      logger.info('*** App is Running😀 ***');
      resolve(true);
    });
  });

export default appLoader;
