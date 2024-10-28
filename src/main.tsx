import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import { theme } from "./app/styles/mui.ts";
import { store } from "./app/store/store.ts";
import { Root } from "./app/root/index.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Root} />
    </ThemeProvider>
  </Provider>
);
