import { supabase } from "@/lib/supabase";
import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import * as T from "./AuthTypes"

const AuthContext = createContext<T.AuthContextProps>({} as T.AuthContextProps);

const AuthProvider = ({ children }: T.AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  async function signInWithEmail({ email, password }: T.SignInWithEmailProps) {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    // if (data) console.log("data ", JSON.stringify(data, null, 3));
    // console.log("error ", JSON.stringify(error, null, 3));
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail({ email, password }: T.SignInWithEmailProps) {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) setUser(session?.user)
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) setUser(session?.user)
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, setSession, signInWithEmail, signUpWithEmail, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): T.AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }