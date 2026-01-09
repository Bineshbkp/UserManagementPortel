import { createAction } from "@reduxjs/toolkit";

export const ACTION_TYPES={

    DO_IT:'counter/doit',
     DO_IT_SUCCESS:'counter/doitSuccess',
      DO_IT_FAILURE:'counter/doitFailure'

};
export const fetchDoIt = createAction(ACTION_TYPES.DO_IT);
export const doItSuccess = createAction(ACTION_TYPES.DO_IT_SUCCESS);
export const doItFailure = createAction(ACTION_TYPES.DO_IT_FAILURE);