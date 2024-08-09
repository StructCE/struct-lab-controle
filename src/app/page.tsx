import { CldImage } from "@/components/app/cldImage";
import { NavBarEstoque } from "./_components/navBarEstoque";

export default async function Home() {
  return (
    <main className="px-48">
      <NavBarEstoque />
      <CldImage alt={"vai"} src="cld-sample-5" width={500} height={500}/>
    </main>
  );
}