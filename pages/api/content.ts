import { NextApiRequest, NextApiResponse } from "next";

import { getCms, handleError } from "../../lib/utils";

import ApiMessageType from "../../utils/types/api/message";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | ApiMessageType>
) {
  try {
    const cms = getCms();

    res.json({
      cms,
    });
  } catch (error) {
    handleError(res, error);
  }
}
