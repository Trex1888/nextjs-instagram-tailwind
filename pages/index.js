import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Nextjs Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />

      <main className="text-2xl text-left font-bold px-4 py-2">
        <h1>You Enjoy Myself</h1>
        <h1>Fluffhead</h1>
        <h1>Harpua</h1>
        <h1>Simple</h1>
        <h1>The Mango Song</h1>
        <h1>Run Like an Antelope</h1>
        <h1>Fee</h1>
        <h1>David Bowie</h1>
        <h1>Esther</h1>
        <h1>Harry Hood</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>You Enjoy Myself</h1>
        <h1>Fluffhead</h1>
        <h1>Harpua</h1>
        <h1>Simple</h1>
        <h1>The Mango Song</h1>
        <h1>Run Like an Antelope</h1>
        <h1>Fee</h1>
        <h1>David Bowie</h1>
        <h1>Esther</h1>
        <h1>Harry Hood</h1>
      </main>
    </div>
  );
}
