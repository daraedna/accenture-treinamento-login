// auth -> chave de autenticação
// signIn -> Login do usuario -> auth
// signOut -> deslogar o usuario -> remover o auth
// acesso a api pra autenticar usuarios
// error -> erros
import React, { createContext, useContext, useState, useCallback} from "react";
import { api } from '../../../services/api';

const AuthContext = createContext({});

function AuthProvider({children}) {
    const [error, setError] = useState("");
    const [auth, setAuth] = useState(()=> {
        const token = sessionStorage.getItem('@Academia_login');

        if(token) {
            return token
        }
        return ""
    });

    const SignIn = useCallback(async ({login, password}) => {
        setError("");
        try {
            if(!login || !password) {
                setError("Login e/ou senha inválidos!");
                return
            }
            const { data } = await api.get(`/users?login=${login}`);
            if (data.length === 0) {
                setError("Login e/ou senha inválidos!");
                return
            }

            if (data[0].password !== password) {
                setError("Login e/ou senha inválidos!");
                return
            }
            sessionStorage.setItem('@Academia_login', data[0].access_token)
            setAuth(data[0].access_token)
            api.defaults.headers.Authorization = `Bearer ${data[0].access_token}`


        } catch (error) {
            setError("Login e/ou senha inválidos!");
        }
    }, []);

    const SignOut = useCallback(() => {
        sessionStorage.removeItem('@Academia_login');
        setAuth("");
    }, []);

    return (
        <AuthContext.Provider
            value={{
                auth,
                error,
                SignIn,
                SignOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }

