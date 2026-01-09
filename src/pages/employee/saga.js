import { call, put, takeLatest } from "redux-saga/effects";
// import { increment } from "./slice";
import axios from "axios";
import { ACTION_TYPES } from "./action";

async function fetchUsersApi(){
    try {
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return null;
    }    
}

//worker saga
function* handleLogAsync(){
        const response =yield call(fetchUsersApi);
    // console.log({response});
    console.log('response :>> ', response);
    if (response) {
        yield put ({type :'counter/doitSuccess' , payload: response})            
    }
    else{
            yield put ({type :'counter/doitFailure' , payload:'No data received'})
        }
}

//watcher saga
export function* watchCounterSaga(){
    yield takeLatest(ACTION_TYPES.DO_IT,handleLogAsync);

}