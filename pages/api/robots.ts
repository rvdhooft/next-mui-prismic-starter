import { NextApiRequest, NextApiResponse } from 'next';

const allowRobotsTxt = `
    User-agent: *
    Disallow: /api/*
    
    Sitemap: ${process.env.SITE_URL}/sitemap.xml
`;

const disallowRobotsTxt = `
    User-agent: *
    Disallow: /
`;

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.send(
    process.env.NODE_ENV === 'production' ? allowRobotsTxt : disallowRobotsTxt
  );
}
