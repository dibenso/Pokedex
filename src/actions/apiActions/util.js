import { FETCH_NOT_FOUND_MESSAGE } from '../../constants';

export const checkStatus = response => {
  if(response.status !== 200) {
    if(response.status === 404) {
      const error = new Error(FETCH_NOT_FOUND_MESSAGE);
      error.notFound = true;
      throw error;
    }
    else
      throw new Error();
  }
  else
    return response;
};

export const parseJSON = response => response.json();