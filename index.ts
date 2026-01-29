import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import path from 'path';
import { appLoader, databaseLoader } from './src/loaders';
import router from './src/route';

// Set global root path
declare global {
  var root_path: string;
}
global.root_path = path.resolve(__dirname);

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  console.error(' UNCAUGHT EXCEPTION ');

  console.error(`[Inside "uncaughtException" event] ${err.stack || err.message}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error(' UNHANDLED REJECTION ');

  console.error('Unhandled Rejection at:', promise, 'REASON:', reason);
});

// Initialize Express application
const app: Express = express();

databaseLoader()
  .then(() => {
    appLoader(app, router);
  })
  .catch((error) => {
    throw new Error(error);
  });
