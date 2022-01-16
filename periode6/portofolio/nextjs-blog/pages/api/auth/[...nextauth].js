import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'


export default NextAuth({
  providers: [
    adapter: TypeORMLegacyAdapter({
      type: 'mysql',
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      synchronize: false
    }),
  
    // Passwordless / email sign in
    EmailProvider({         
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),
  ]
})