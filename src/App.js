import {
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
// import { Layout } from "./Layout";
import { LoginPage } from "./LoginPage";
import { Header } from "./Header";
// import { PublicPage } from "./PublicPage";
import { RequireAuth } from "./RequireAuth";
import { AuthStatus } from "./AuthStatus";
import { Page1 } from "./page1";
import { Page2 } from "./page2";

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <AuthStatus />

      <Routes>
        {/* <Route element={<Layout />}> */}
          {/* <Route path="/" element={<PublicPage />} /> */}
          <Route index element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Header />
              </RequireAuth>
            }
          >
            <Route index element={<Page1 />}/>
            <Route path="page1" element={<Page1 />}/>
            <Route path="page2" element={<Page2 />}/>
          </Route>
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
}


