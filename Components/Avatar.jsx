import { Avatar, AvatarImage } from "./ui/avatar";
import { brainwaveSymbol } from '../assets'

export const Avatar = () => {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage className="p-1" src={brainwaveSymbol.src} />
        </Avatar>
    );
};
