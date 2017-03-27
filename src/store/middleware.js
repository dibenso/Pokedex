import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default function createMiddleware() {
  const logger = createLogger({
    collapsed: true
  });

  return [thunk, logger];
}