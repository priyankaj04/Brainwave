import Image from "next/image";
import { brainwaveSymbol } from '../assets'

interface EmptyProps {
    label: string;
}

export const Empty = ({ label }: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="bg-violet-500/10 border p-8 rounded-full border-violet-500">
                <img alt="Empty" src={brainwaveSymbol.src} width={120} height={120} />
            </div>
            <p className="text-muted-foreground mt-5 text-md text-center">{label}</p>
        </div>
    );
};
