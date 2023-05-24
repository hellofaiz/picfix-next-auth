import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useState } from 'react'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import Layout from '@/layout/layout'

export default function Home() {

  const { data: session } = useSession()
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: process.env.NEXTAUTH_URL })
  }
  async function handleSignOut() {
    signOut()
  }
  // if (status === 'loading') return <h1> loading... please wait</h1>; if (status === 'authenticated') {



  async function handleGithubSignIn() {
    signIn('github', { callbackUrl: process.env.GITHUB_URL })
  }

  return (
    <div className="container">
      <Head>
        <title>NextAuth.js Example</title>
        <link rel="icon" href="/vercel.svg" />

      </Head>


      {session ? (
        <main>
          <div className='flex h-screen bg-blue-800'>
            <div className="text-center mt-20 m-auto bg-slate-50 rounded-md w-3/5 h-4/4 grid grid lg:grid-cols-2">
              <div className="flex  grid grid lg:grid-rows-2">

                <div className="text-center py-20 ">
                  You are successfully Authenticated
                </div>
                <div className="text-center py-10">
                  <button style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }} onClick={handleSignOut}>Sign Out</button>
                </div>

              </div>
              <div className="text-center py-20 bg-blue-300 ">
                <div className="text-center bg-blue-400 ">
                  <label >User Profile</label><br /><br />

                </div>
                <div className="text-center bg-blue-400 ">
                  <label >Name</label>
                  <h1>{session.user.name}</h1>
                </div>
                <div className="text-center bg-blue-500 ">
                  <label >Email</label>
                  <h1>{session.user.email}</h1>
                </div>
              </div>
            </div>
          </div>

        </main >



      ) : (

        <Layout className="container">
          <main>
            <div className="input-button">
              {/* signup with google */}
              <h1 style={{ fontSize: '30px' }}>Click to signup using Google ⬇️</h1>
              <hr />
              <br />
              <br />
              <br />
              <br />
              <button style={{ border: '2px solid #000', padding: '20px', marginRight: '30px', borderRadius: '10px' }} onClick={handleGoogleSignIn}>
                Sign up With  <strong>Google ➡️</strong>
              </button>
              <button style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }} onClick={handleGithubSignIn}>
                Sign up With <strong> GitHub ➡️</strong>
              </button>
            </div>

          </main >
        </Layout>

      )
      }

    </div>

  )
}


// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req });
//   console.log(session);

//   return {
//     props: {
//       session
//     }
//   }
// }