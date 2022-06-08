import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./User/UserReducer";
import CartReducers from "./Cart/CartReducers";
import directoryReducer from "./Directory/DirectoryReducer";
import shopReducer from "./Shop/ShopReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducers,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
