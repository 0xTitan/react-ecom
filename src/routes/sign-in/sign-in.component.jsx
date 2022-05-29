import { async } from "q";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGooogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGooogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
