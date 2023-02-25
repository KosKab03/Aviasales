import React from 'react';
import { Alert } from 'antd';

export function ErrorAlerts() {
  return (
    <Alert
      message="Server not responding"
      description="Try reloading the page or retrying the request later.
      We are already fixing this issue."
      type="error"
    />
  );
}

export function NotFoundAlerts() {
  return <Alert message="Sorry, nothing was found for your search" type="warning" />;
}
