import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import firebase from "gatsby-plugin-firebase";
import { navigate } from "gatsby";

type FormTypes = "SIGN_IN" | "SIGN_UP";

type ContextType = {
  isSignedIn: boolean;
  userNameOrEmail: string | null;
  formType: FormTypes;
  setFormType: React.Dispatch<React.SetStateAction<FormTypes>>;
  isSignInForm: () => boolean;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

const initialValue: ContextType = {
  isSignedIn: false,
  userNameOrEmail: null,
  formType: "SIGN_IN",
  setFormType: () => {},
  isSignInForm: () => true,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = createContext<ContextType>(initialValue);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userNameOrEmail, setUserNameOrEmail] = useState<string | null>(null);
  const [formType, setFormType] = useState<FormTypes>("SIGN_IN");

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      setUserNameOrEmail(user && (user.displayName || user.email));
    });

    return unsubscriber;
  }, []);

  const isSignInForm = () => formType === "SIGN_IN";

  const signUp = async (email: string, password: string) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigate("/");
      console.log({ error: false, message: "Successfully, signed up." });
    } catch (err) {
      console.log({ error: true, message: err.message });
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log({ error: false, message: "Successfully, signed up." });
      navigate("/");
    } catch (err) {
      console.log({ error: true, message: err.message });
    }
  };

  const signOut = () => {
    firebase.auth().signOut();
    navigate("/signin");
  };

  const value: ContextType = {
    ...initialValue,
    isSignedIn,
    userNameOrEmail,
    formType,
    setFormType,
    isSignInForm,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
