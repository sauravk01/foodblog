import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!session && (
          <div>
            <h5>Please signIn</h5>
            <button onClick={() => signIn()}>Here</button>
          </div>
        )}
        {session && (
          <div>
            <h5>You are {session.user.name}. If you want to signout </h5>
            <button onClick={() => signOut()}>Click Here</button>
            <div>
              <Link href="create/category">
                <a>Create Category</a>
              </Link>
            </div>
            <div>
              <Link href="create/sub-category">
                <a>Create Sub-Category</a>
              </Link>
            </div>
            <div>
              <Link href="create/recipe">
                <a>Create Recipe</a>
              </Link>
            </div>
            <div>
              <Link href="create/tag">
                <a>Create Tag</a>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
