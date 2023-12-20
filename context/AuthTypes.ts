import { Session, User } from "@supabase/supabase-js";
import { ReactNode } from "react";

type AuthContextProps = {
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
  signInWithEmail: ({ email, password }: SignInWithEmailProps) => Promise<void>;
  signUpWithEmail: ({ email, password }: SignInWithEmailProps) => Promise<void>;
  user: User | null;
  loading: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
};

type SignInWithEmailProps = {
  email: string;
  password: string;
};

export { AuthContextProps, AuthProviderProps, SignInWithEmailProps }