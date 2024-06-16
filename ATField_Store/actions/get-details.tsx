import { Detail } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/details`;

const getDetails = async (): Promise<Detail[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getDetails;
