import { NextApiRequest, NextApiResponse } from "next";

// [...params].ts -> Passar várias instruções pela URL

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "AG" },
    { id: 2, name: "Herlander" },
    { id: 3, name: "Paulo" },
  ];

  return response.json(users);
};
