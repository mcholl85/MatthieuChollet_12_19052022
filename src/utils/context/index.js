import { createContext } from 'react';

/**
 * @typedef UserContext
 * @property {number} userId - User's ID
 * @property {Object} userData - User's Data
 */

const UserContext = createContext();

export default UserContext;
