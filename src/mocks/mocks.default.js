export const enableAll = true;

export const rests = {
  health: {
    path: '/api/health',
    data: {
      health: true,
    },
  },
};

const modules = {
  enableAll,
  rests,
};

export default modules;
