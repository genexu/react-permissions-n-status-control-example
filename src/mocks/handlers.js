import { rest } from 'msw';
import settings from './mocks.default';

const handlers = Object.keys(settings.rests)
  .map((key) => settings.rests[key])
  .filter((item) => item.enable ?? settings.enableAll)
  .map((item) => rest[item.method || 'get'](item.path, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ ...item.data }),
  )));

export default handlers;
