import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import CounterReducer, {
  CounterSlice,
} from "../../features/contact/CounterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/CatalogApi";
import { uiSlice } from "../Layout/uiSlice";

export default function ConfigureTheStore() {
  return legacy_createStore(CounterReducer);
}

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    counter: CounterSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
