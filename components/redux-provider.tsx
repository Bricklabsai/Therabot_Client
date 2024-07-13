"use client";
import { store, persistor } from "@/lib/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
