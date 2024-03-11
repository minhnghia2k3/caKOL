import Main from "../components/main";
import seed from "@/scripts/seed";
export default async function Home() {
  // await seed(); // Seed user data

  return (
    <>
      <Main />
    </>
  );
}
