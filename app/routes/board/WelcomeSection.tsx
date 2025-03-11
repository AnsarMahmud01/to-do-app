import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface WelcomeSectionProps {
  username: string;
  avatarUrl?: string;
}

const WelcomeSection = ({ username, avatarUrl }: WelcomeSectionProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">Welcome back, {username} 👋</h2>
      </div>
      <div className="flex items-center gap-3">
        {/* Здесь можно добавить аватары команды как на изображении */}
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <Avatar key={index} className="border-2 border-white h-8 w-8">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${index}`}
              />
              <AvatarFallback>U{index}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Button
          variant="outline"
          className="bg-white text-red-500 border-red-500 hover:bg-red-50"
        >
          Invite
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;
