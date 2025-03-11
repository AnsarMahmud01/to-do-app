// components/Header.tsx
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Header = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-10">
          <span className="text-red-500">Dash</span>board
        </h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search your task here..."
            className="w-64 pr-10 rounded-full"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-red-500 hover:bg-red-600 p-1 h-8 w-8"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{formattedDate.split(",")[0]}</p>
        <p className="text-gray-500 text-sm">
          {formattedDate.split(",").slice(1).join("")}
        </p>
      </div>
    </div>
  );
};

export default Header;
