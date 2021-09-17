export const enableAll = true;

export const rests = {
  health: {
    path: '/api/health',
    // status: 403, // set response status code and response error information, default is 200
    // delay: 1000, // delay api response
    data: {
      health: true,
    },
    errors: {
      403: {
        code: 'ERROR-403',
        message: 'No access granted.',
      },
      500: {
        code: 'ERROR-500',
        message: 'Service not available right now.',
      },
    },
  },
};
