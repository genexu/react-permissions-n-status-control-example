import { rest } from 'msw';
import { enableAll, rests } from './mocks.default';

const handlers = Object.keys(rests)
  .map((key) => rests[key])
  .filter((item) => item.enable ?? enableAll)
  .map((item) =>
    rest[item.method || 'get'](item.path, (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ ...item.data })),
    ),
  );

export default handlers;
