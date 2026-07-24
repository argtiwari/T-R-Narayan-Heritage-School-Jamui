import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[150vh] bg-school-surface pt-20">
        <h1 className="sr-only">TR Narayan Heritage School</h1>
      </main>
    </>
  );
}