import { useUser } from "@clerk/nextjs";
import { AvatarUI, AvatarFallback, AvatarImage } from "./ui/avatarui";

export const UserAvatar = () => {
    const { user } = useUser();
    return (
        <AvatarUI className="h-8 w-8">
            <AvatarImage src={user?.profileImageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </AvatarUI>
    );
};
