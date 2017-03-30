import { FETCH_ERROR_MESSAGE,
         FETCH_NOT_FOUND_MESSAGE } from '../../constants';

export const checkStatus = response => {
  if(response.status !== 200) {
    if(response.status === 404)
      throw new Error(FETCH_NOT_FOUND_MESSAGE);
    else
      throw new Error(FETCH_ERROR_MESSAGE);
  }
  else
    return response;
};

export const parseJSON = response => response.json();