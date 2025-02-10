import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function App() {

  return (
    <>
      <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      <h1 className="text-red-400">Hare Krishna!</h1>
    </>
  )
}

export default App
