import Image from "next/image"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import seed from "@/scripts/seed"
export default async function Home() {
    // await seed(); // Seed user data

    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}
