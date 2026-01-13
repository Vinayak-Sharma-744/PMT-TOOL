import { logMessage } from './../../services/common/index';
import mongoose from 'mongoose';

/**
 * Loads the database connection.
 * @returns Promise<mongoose.Connection> Resolves when the database is connected.
 */
const databaseLoader = (): Promise<mongoose.Connection> => {
  return new Promise((resolve, reject) => {
    mongoose.set('debug', false);

    mongoose
      .connect(String(process.env.DB_STRING))
      .then(() => {
        logMessage('*** DB Connected😀 ***');
        resolve(mongoose.connection);
      })
      .catch((error) => {
        logMessage(`*** DB Connection Failed ***, ${error}`);
        reject(error);
      });
  });
};

export default databaseLoader;