import { NextApiRequest, NextApiResponse } from "next";

import { ADMIN_ACTIONS } from "lib/admin";

const formatOutput = (output: any[]): string[] =>
  output.map((line) =>
    typeof line === "string" ? line : JSON.stringify(line, null, 2)
  );

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const { actionName } = request.query;

  const action = ADMIN_ACTIONS[actionName as string];
  if (!action) {
    response.status(404).send(null);
    return;
  }

  const output: any[] = [];
  try {
    await action(output);
  } catch (error: any) {
    output.push(`ERROR: ${error.message}`);
    response.status(500).json({ output: formatOutput(output) });
    return;
  }
  response.status(200).json({ output: formatOutput(output) });
};

export default handler;
