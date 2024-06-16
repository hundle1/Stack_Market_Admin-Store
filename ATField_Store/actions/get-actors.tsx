import { Actor } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/actors`;

const getActors = async (): Promise<Actor[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getActors;
