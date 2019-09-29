import { pickBy } from 'lodash';

export const removeEmpty = (object) => pickBy(object, (prop) => prop !== '');
