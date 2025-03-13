import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import CounterReducer, {
  CounterSlice,
} from "../../features/contact/CounterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/CatalogApi";
import { uiSlice } from "../Layout/uiSlice";
import { errorApi } from "../../features/about/errorApi";
import { basketApi } from "../../features/basket/BasketApi";
import { catalogSlice } from "../../features/catalog/catalogSlice";
import { accountApi } from "../../features/account/accountApi";
import { checkoutApi } from "../../features/checkout/checkoutApi";
import { orderApi } from "../../features/orders/orderApi";

export default function ConfigureTheStore() {
  return legacy_createStore(CounterReducer);
}

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [errorApi.reducerPath]: errorApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    counter: CounterSlice.reducer,
    ui: uiSlice.reducer,
    catalog: catalogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      catalogApi.middleware,
      errorApi.middleware,
      basketApi.middleware,
      accountApi.middleware,
      checkoutApi.middleware,
      orderApi.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
