import { createSelector } from 'reselect';

const uiState = state => state.ui;

export const getCurrentModal = createSelector(uiState, state => state.modal);
export const shouldShowModal = createSelector(getCurrentModal, modal => !!modal);
