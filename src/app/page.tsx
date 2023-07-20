import { News, Footer, Intro } from "@/sections";

export default function Page() {
  return (
    <div className="w-screen relative">
      <div className="w-full">
        <Intro />
      </div>

      <div className="flex w-full justify-center relative">
        <News />
      </div>
      <div className="flex w-full justify-center relative">
        <Footer />
      </div>
    </div>
  );
}
