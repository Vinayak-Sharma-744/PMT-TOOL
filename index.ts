import 'dotenv/config';
import express, { Express } from 'express';
import path from 'path';
import { appLoader, databaseLoader } from './src/loaders';
import router from './src/route';
import job from './src/config/cron';

// Set global root path
declare global {
  // eslint-disable-next-line no-var
  var root_path: string;
}
global.root_path = path.resolve(__dirname);

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  // eslint-disable-next-line no-console
  console.error(' UNCAUGHT EXCEPTION ');
  // eslint-disable-next-line no-console
  console.error(`[Inside "uncaughtException" event] ${err.stack || err.message}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  // eslint-disable-next-line no-console
  console.error(' UNHANDLED REJECTION ');
  // eslint-disable-next-line no-console
  console.error('Unhandled Rejection at:', promise, 'REASON:', reason);
});

// Initialize Express application
const app: Express = express();

databaseLoader()
  .then(() => {
    appLoader(app, router);

    // Start the cron job
    job.start();
  })
  .catch((error) => {
    throw new Error(error);
  });
