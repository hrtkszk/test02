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
import { BoshuList } from "./BoshuList";
import { BoshuDetail } from "./BoshuDetail";
import { BoshuPost } from "./BoshuPost";
import { ProfileList } from "./ProfileList";
import { ProfileSearchSetting } from "./ProfileSearchSetting";
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
import { AiteProfile } from "./AiteProfile";

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
          <Route path="BoshuList" element={<BoshuList />}/>
          <Route path="BoshuDetail" element={<BoshuDetail />}/>
          <Route path="BoshuPost" element={<BoshuPost />}/>
          <Route path="ProfileList" element={<ProfileList />}/>
          <Route path="ProfileSearchSetting" element={<ProfileSearchSetting />}/>
          <Route path="Detail" element={<AiteProfile />}/>
          <Route path="Message" element={<Message />}/>
          <Route path="MessageList" element={<MessageList />}/>
          <Route path="MyProfile" element={<Profile />}>
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


