import {
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { LoginPage } from "./LoginPage";
import { Header } from "./Header";
import { RequireAuth } from "./RequireAuth";
import { AuthStatus } from "./AuthStatus";
import { Profile } from "./Profile";
import { ProfileDetail } from "./ProfileDetail";
import { ProfileSetting } from "./ProfileSetting";
import { ChangePwd } from "./ChangePwd";
import { ChangeEmail } from "./ChangeEmail";
import { Page2 } from "./page2";
import { ProfileList } from "./ProfileList";
import { Message } from "./Message";
import { MessageList } from "./MessageList";
import { LogOutPage } from "./logoutPage";
import { ForgetPwd } from "./ForgetPwd";
import { NewUser } from "./NewUser";
import { EmailSent } from "./EmailSent";
import { EmailExist } from "./EmailExist";
import { EmailNotExist } from "./EmailNotExist";
import { NotExist } from "./NotExist";
import { Registration } from "./Registration";
import { ResetPwd } from "./ResetPwd";

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <AuthStatus />

      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="NewUser" element={<NewUser />}/>
        <Route path="EmailSent" element={<EmailSent />}/>
        <Route path="EmailExist" element={<EmailExist />}/>
        <Route path="EmailNotExist" element={<EmailNotExist />}/>
        <Route path="ForgetPwd" element={<ForgetPwd />}/>
        <Route path="Registration/:userId" element={<Registration />} />
        <Route path="ResetPwd/:userId" element={<ResetPwd />} />
        <Route path="*" element={<NotExist />}/>
        <Route
          path="protected"
          element={
            <RequireAuth>
              <Header />
            </RequireAuth>
          }
        >
          <Route index element={<ProfileList />}/>
          <Route path="page2" element={<Page2 />}/>
          <Route path="ProfileList" element={<ProfileList />}/>
          <Route path="Message" element={<Message />}/>
          <Route path="MessageList" element={<MessageList />}/>
          <Route path="profile" element={<Profile />}>
            <Route index element={<ProfileDetail />}/>
            <Route path="ProfileDetail" element={<ProfileDetail />}/>
            <Route path="ProfileSetting" element={<ProfileSetting />}/>
            <Route path="ChangePwd" element={<ChangePwd />}/>
            <Route path="ChangeEmail" element={<ChangeEmail />}/>
          </Route>
          <Route path="logout" element={<LogOutPage />}/>

        </Route>
      </Routes>
    </AuthProvider>
  );
}


