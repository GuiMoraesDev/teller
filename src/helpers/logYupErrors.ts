const logYupErrors = (yupErrors: unknown): void => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(yupErrors);
  }
};

export default logYupErrors;
