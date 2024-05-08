import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./Slices/MetaReducer";
import addTocard from "./Slices/AddtoCart";
import authSlice from "./Slices/LoginSlices"
import allProductData from "./Slices/AllProductSlice";
import carousalData from "./Slices/CarousalSlice";
import userData from "./Slices/UserlistSlice";
import SearchProduct from "./Slices/SearchProduct";
import SortProduct from "./Slices/SortProduct";


const resetSlices=[
   "addtocard",
   "authinfo",
   "allproduct",
   "carousalslice",
   "alluser",
   "searchproduct",
   "sortproduct",
];

const rootReducer=createResetMetaReducer(
    "GLOBAL_RESET",
    resetSlices
)(
    combineReducers({
        addtocard:addTocard,
        authinfo:authSlice,
        allproduct:allProductData,
        carousalslice:carousalData,
        alluser:userData,
     SearchProduct:SearchProduct ,
     SortProduct:SortProduct,
        
    })
);

const persistConfig={
    key:"root",
    storage,
    whitelist:resetSlices,
};
export default persistReducer(persistConfig,rootReducer);