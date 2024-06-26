import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
import axios from '@/lib/axios/public'
import NextAuth from "next-auth"
import { NextAuthConfig } from "next-auth";


const authOptions: NextAuthConfig = {
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = (user as any).accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.sessionToken = token.accessToken as unknown as string
            //session.user.id = token.userId as string;
            //session.user.email = token.email as string;
            //session.user.name = token.name;
            //session.accessToken = token.accessToken as string;
            return session;
        },

        async signIn({ user, account, profile, email, credentials }) {

            if (account?.provider == 'credentials') {
                return true
            }
            if (account?.provider == 'google') {
                console.log('it is google')

                const res = await axios.get('/users', { params: { email: profile?.email } })
                console.log('RES1 =>', res.data)
                const { error } = res.data
                if (!error) {
                    console.log('account already exit')
                    return true
                }
                let accountData = {
                    type: account.type,
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    refresh_token: account.refresh_token,
                    access_token: account.access_token,
                    expires_at: account.expires_at?.toString(),
                    token_type: account.token_type,
                    scope: account.scope,
                    id_token: account.id_token,

                }
                console.log(accountData)
                const res2 = await axios.post('/account', accountData)

                console.log(res.data)

                console.log("PROFILE=>", profile)

                let newData = {
                    name: profile?.name,
                    email: profile?.email,
                    provider: account.provider,
                    image: (profile as any).picture || null,
                }
                const res3 = await axios.post('/signup-oauth', newData)

                if (res2.status < 300 && res3.status < 300) {
                    return true
                }
                return false
            }
            return false
        },

    },
    providers: [
        CredentialsProvider({
            async authorize(credentials: any) {
                const authResponse = await fetch(process.env.API_URL + "/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                })

                if (!authResponse.ok) {
                    return null
                }

                const user = await authResponse.json()
                return user
            },
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET || '',
        }),

    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 Days
    },

}

export const { auth, handlers } = NextAuth(authOptions)
