import { Button } from "@/components/ui/button";

type ButtonWithChildren = {
    children: React.ReactNode;
  };
export function BtnRegister(props:ButtonWithChildren) {
  return (
    <div>
      <Button
        className="w-56 bg-black text-white hover:bg-slate-600 hover:text-white"
        variant="outline"
      >
        Cadastrar {props.children}
      </Button>
    </div>
  );
}
