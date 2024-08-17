import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
type FiltroProps ={
  value: string;
  children:string;
}
export function Filtro(props: FiltroProps) {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-28 bg-[#EEEEEE]">
          <Filter size={15}/>
          <SelectValue placeholder="Filtros" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value={props.value}>{props.children}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
