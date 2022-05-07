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
import { Message } from "./Message";
import { MessageList } from "./MessageList";
import { LogOutPage } from "./logoutPage";
import { ForgetPwd } from "./ForgetPwd";
import { NewUser } from "./NewUser";

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <AuthStatus />

      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="NewUser" element={<NewUser />}/>
        <Route path="ForgetPwd" element={<ForgetPwd />}/>
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
          <Route path="Message" element={<Message />}/>
          <Route path="MessageList" element={<MessageList />}/>
          <Route path="logout" element={<LogOutPage />}/>

        </Route>
      </Routes>
    </AuthProvider>
  );
}


