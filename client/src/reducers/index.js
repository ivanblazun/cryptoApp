import { combineReducers } from "redux";
import getCoinReducer from './getCoinReducer';
import getCurrencyReducer from "./getCurrencyReducer";
import authReducer from './authReducer';
import getFiatReducer from "./getFiatReducer";
import getProfileReducer from "./getProfileReducer";
import getAvatarReducer from "./getAvatarReducer";

export default combineReducers({
  coin: getCoinReducer,
  currencys: getCurrencyReducer,
  user: authReducer,
  fiat: getFiatReducer,
  profile: getProfileReducer,
  avatar: getAvatarReducer
})