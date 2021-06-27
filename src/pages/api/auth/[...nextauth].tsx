import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorizationUrl:
                'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorizationUrl: 'https://github.com/login/oauth/authorize',
        })

        // ...add more providers here
    ],

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // 30 day
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        /* signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,

        // You can also specify a public key for verification if using public/private key (but private only is fine)
        // verificationKey: process.env.JWT_SIGNING_PUBLIC_KEY,

        // If you want to use some key format other than HS512 you can specify custom options to use
        // when verifying (note: verificationOptions should include a value for maxTokenAge as well).
        verificationOptions: {
            maxTokenAge: `${30 * 24 * 60 * 60}s`,
            algorithms: ['HS512']
        } */
    }


    // A database is optional, but required to persist accounts in a database
    //  database: process.env.DATABASE_URL,
})