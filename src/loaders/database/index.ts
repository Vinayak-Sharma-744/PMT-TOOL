import mongoose from 'mongoose';
import { logger } from '../../utils/logger/index';

/**
 * Loads the database connection.
 * @returns Promise<mongoose.Connection> Resolves when the database is connected.
 */
const databaseLoader = (): Promise<mongoose.Connection> => {
  console.log(`Connecting to database at ${process.env.DB_STRING}`);
  
  return new Promise((resolve, reject) => {
    mongoose.set('debug', false);

    mongoose
      .connect(String(process.env.DB_STRING))
      .then(() => {
        logger.info('*** DB Connected😀 ***');
        resolve(mongoose.connection);
      })
      .catch((error) => {
        logger.error(`*** DB Connection Failed ***, ${error}`);
        reject(error);
      });
  });
};

export default databaseLoader;