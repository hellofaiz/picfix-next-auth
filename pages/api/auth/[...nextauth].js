import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
require('dotenv').config();

const secret = 'DYOTIS';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,

    })

  ],
  secret,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Custom logic after successful sign-in
      // console.log("Sign in " + user.name + "profile-" + profile + "email- " + email + "credentials" + credentials);
      return true;
    },

    async redirect(url, baseUrl) {
      // console.log(url.url.startsWith(baseUrl));
      return Promise.resolve(url.url)

      // debugger;
      // console.log("Redirect =>" + url + "Base url=> " + baseUrl);
      // debugger;
      // Custom redirection logic
      // return url.startsWith(baseUrl) ? url : baseUrl;
      // return process.env.NEXTAUTH_URL;
      // Promise.resolve('/');
    },
    // async jwt(token) {
    //   return Promise.resolve(token)

    // },
    // session: {
    //   jwt: true,
    //   maxAge: 60 * 60, // 1 hour
    // },
    cookies: {
      sessionToken: {
        name: `next-auth.session-token`,
        options: {
          httpOnly: true,
          sameSite: 'lax',
          path: '/',
          secure: process.env.NODE_ENV === 'production',
        },
      },
      csrfToken: {
        name: `next-auth.csrf-token`,
        options: {
          httpOnly: true,
          sameSite: 'lax',
          path: '/',
          secure: process.env.NODE_ENV === 'production',
        },
      },
    },

    // secret,
  }
});
