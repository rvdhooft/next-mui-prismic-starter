import * as prismicNext from '@prismicio/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { createClient } from '../../prismicio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createClient({ req });

  prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client });
}
