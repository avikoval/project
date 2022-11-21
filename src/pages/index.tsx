import { NextAuthPage } from "../globals/types";

// TODO: Main page
const Home: NextAuthPage = () => {
    return <span>Hello!</span>;
};

export default Home;

Home.auth = {
    scope: ["profile:read", "profile:update"],
};