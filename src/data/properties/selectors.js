import { createSelector } from 'reselect';

const propertiesState = state => state.properties;

export const getPropertiesList = createSelector(propertiesState, state => state.list);
