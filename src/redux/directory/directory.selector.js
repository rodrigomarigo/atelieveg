import { createSelector } from 'reselect';

const selectDirectory = state => state.pasta;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    pasta => pasta.secoes
);