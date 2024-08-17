import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type searchBarProps = {
    placeholder: string;
}
export function SearchBar(props: searchBarProps){
    return(
        <div className="flex relative">
            <Search size={16} strokeWidth={1} className="absolute top-3 left-2" />
            <Input
               placeholder={`Pesquisar por ${props.placeholder}`}
              className="w-[25rem] pl-10"
            />
        </div>
    );
}