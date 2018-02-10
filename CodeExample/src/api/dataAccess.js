import _ from 'lodash';
import { endpoint } from '../config'

export const getTops = async (parameters) => {
  const query = _.template(endpoint + '?limit=<%= limit%>');
  const result = await fetch(query(parameters));
  return result.json();
};

export default getTops
