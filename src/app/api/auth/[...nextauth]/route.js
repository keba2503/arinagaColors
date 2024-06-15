// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '../../../../lib/db'; // Ensure this path is correct
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password", placeholder: "*****" },
            },
            async authorize(credentials, req) {
                console.log(credentials);

                const userFound = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!userFound) throw new Error('No user found');

                console.log(userFound);

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password);

                if (!matchPassword) throw new Error('Wrong password');

                return {
                    id: userFound.id,
                    name: userFound.username,
                    email: userFound.email,
                };
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
    },
    session: {
        jwt: true,
    },
    callbacks: {
        async session({ session, token, user }) {
            session.userId = token.id;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };