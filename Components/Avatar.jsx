import { AvatarUI, AvatarImage } from "./ui/avatarui";
import { brainwaveSymbol } from '../assets'

export const Avatar = () => {
    return (
        <AvatarUI className="h-8 w-8">
            <AvatarImage className="p-1" src={brainwaveSymbol.src} />
        </AvatarUI>
    );
};
