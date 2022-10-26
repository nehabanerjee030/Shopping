import {
  customSignInWithPopup,
  createUserUsingAuth,
} from "../../../utils/firebase/firebase-utils";

import SignUpForm from "./SignUpForm";

const SignInComponent = () => {
  const signInWithGoogle = async () => {
    const response = await customSignInWithPopup();
    const { user } = response;
    await createUserUsingAuth(user);
  };

  return (
    <>
      <h1>{"Please sign in"}</h1>
      <button onClick={signInWithGoogle}>Sign In with Google Popup</button>
      <SignUpForm />
    </>
  );
};

export default SignInComponent;
