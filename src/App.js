import {
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { LoginPage } from "./LoginPage";
import { Header } from "./Header";
import { RequireAuth } from "./RequireAuth";
import { AuthStatus } from "./AuthStatus";
import { Page1 } from "./page1";
import { Page2 } from "./page2";
import { LogOutPage } from "./logoutPage";

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <AuthStatus />

      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="protected"
          element={
            <RequireAuth>
              <Header />
            </RequireAuth>
          }
        >
          <Route index element={<Page1 />}/>
          <Route path="page1" element={<Page1 />}/>
          <Route path="page2" element={<Page2 />}/>
          <Route path="logout" element={<LogOutPage />}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}


