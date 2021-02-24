import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import firebase from "gatsby-plugin-firebase";
import { navigate } from "gatsby";

type ContextType = {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userNameOrEmail: string | null;
  setUserNameOrEmail: React.Dispatch<React.SetStateAction<string | null>>;
  logOut: () => void;
};

const initialValue: ContextType = {
  isSignedIn: false,
  setIsSignedIn: () => {},
  userNameOrEmail: null,
  setUserNameOrEmail: () => {},
  logOut: () => {},
};

export const AuthContext = createContext<ContextType>(initialValue);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userNameOrEmail, setUserNameOrEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      setUserNameOrEmail(user && (user.displayName || user.email));
    });

    return unsubscriber;
  }, []);

  const logOut = () => {
    firebase.auth().signOut();
    navigate("/login");
  };

  const value: ContextType = {
    isSignedIn,
    setIsSignedIn,
    userNameOrEmail,
    setUserNameOrEmail,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
