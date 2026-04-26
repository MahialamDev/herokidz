import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: 1,
    name: "Mahialam Rahat",
    email: "mahialam407@gmail.com",
    password: "646453",
    role: "user",
  },
  { id: 2, name: "Mahtab", email: "mahtab@gmail.com", password: "646453" },
  {
    id: 3,
    name: "Abdul Al Arham",
    email: "arham@gmail.com",
    password: "646453",
  },
];

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" }
      // },
      async authorize(credentials, req) {
        const { email } = credentials;
        // find user

        const user = users.find((u) => u.email === email);

        // if user exist
        if (user) {
          return user;
        }

        return null;
      },
    }),

    


  ],

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id
        token.name = user.name,
          token.email = user.email,
          token.role = user.role
      }

      return token;
    },

    async session({ session, user, token }) {
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = token.role;
      session.user.id = token.id;

      return session;
    },

  }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
