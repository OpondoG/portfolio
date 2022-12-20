/* eslint-disable react/button-has-type */
import { signInWithGoogle } from '../../firebase';

const Login = () => (
  <div className="dashboard">
    <button onClick={signInWithGoogle}>
      Sign in with google
    </button>
  </div>
);

export default Login;
