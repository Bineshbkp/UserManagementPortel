import {flow} from 'lodash';

const getCount=(state) => state['counter'];

const selectApiData=(state)=>state.apiData;
export const getSelectApiData=flow(getCount,selectApiData)


