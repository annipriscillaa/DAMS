import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Dashboard_dentist from "./Dashboard_dentist";
import settings_page from "./settings_page";
import profile_pg_dentist from "./profile_page-k";
import profile_pg_gen from "./profile_page_gen";
import help_pg from "./help_page-k";
import not_pg from "./notification_page-k";
import help_center from "./help_center-k";
import license_pg from "./license_page-k";
import schedular from "./schedular";
import appearances from "./appearances-h";
import reset_pwd from "./reset_pwd-h";
import tp from "./terms_and_policy-h";
import chid from "./change_userid-h";
import About from "./About-a";
import delete_account from "./delete_acc";
import change_mobile from "./change_mob";
import sign_in_user from "./sign_in_user";
import main_login from "./login_page";
import account_settings from "./account_settings-j";
import contact_us from "./contact_us";
import change_userid from "./changing_user_id-h";
import ceum from "./change_email_using_mobile-h";
import signup_dentist from "./signup_dentist-k";
import signup_general_user from "./signup_general_user-k";
import Appointments_gen from "./appointments_gen";
import Appointment_pg from "./appointments_pg";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign_in" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/dashboard_dentist"
            component={Dashboard_dentist}
          />
          <Route exact path="/settings" component={settings_page} />
          <Route exact path="/profile_pg_dentist" component={profile_pg_dentist} />
          <Route exact path="/profile_pg_gen" component={profile_pg_gen} />
          <Route exact path="/appearances" component={appearances} />
          <Route exact path="/help_pg" component={help_pg} />
          <Route exact path="/about" component={About} />
          <Route exact path="/account_settings" component={account_settings} />
          <Route exact path="/not_pg" component={not_pg} />
          <Route exact path="/main_login" component={main_login} />
          <Route exact path="/signin_general" component={sign_in_user} />
          <Route exact path="/change_userid" component={change_userid} />
          <Route exact path="/schedular" component={schedular} />
          <Route exact path="/help_center" component={help_center} />
          <Route exact path="/contact_us" component={contact_us} />
          <Route exact path="/tp" component={tp} />
          <Route exact path="/license_pg" component={license_pg} />
          <Route exact path="/chid" component={chid} />
          <Route exact path="/reset_pwd" component={reset_pwd} />
          <Route exact path="/ceum" component={ceum} />
          <Route exact path="/change_mobile" component={change_mobile} />
          <Route exact path="/delete_acc" component={delete_account} />
          <Route exact path="/signup_dentist" component={signup_dentist} />
          <Route exact path="/appointments_gen" component={Appointments_gen} />
          <Route exact path="/appointments" component={Appointment_pg} />
          <Route exact path="/signup_general_user" component={signup_general_user} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
