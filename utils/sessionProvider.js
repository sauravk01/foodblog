import { getSession } from "next-auth/react";

const sessionProvider = async (req) => {
  const session = await getSession({ req });
  // console.log("session", session.accessToken);
  if (!session.accessToken) {
    return res.status(401).json({ error: "Unauthenticated user" });
  }
};
export default sessionProvider;
