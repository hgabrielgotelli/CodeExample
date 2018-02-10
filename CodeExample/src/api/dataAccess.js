import _ from 'lodash';
import { endpoint } from '../config'

export const getTops = async (data) => {
  const parameters = {
  };

  const query = _.template(endpoint);
  const result = await fetch(query(parameters));
  return result.json();
};

export default getTops
