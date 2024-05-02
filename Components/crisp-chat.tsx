"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("cc7d5696-97f6-446b-b7dc-fa4381e30949");
    }, []);

    return null;
};
