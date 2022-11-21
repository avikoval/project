import type { NextPage } from "next";
import { Auth } from "./Auth";

export type NextAuthPage = NextPage & {
    auth: Auth;
};
