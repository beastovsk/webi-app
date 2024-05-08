import {getCookie} from 'cookies-next';

export const Login = async (args: {email: string; password: string}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/auth/login', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const Register = async (args: {password: string; email: string}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/auth/register', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const ConfirmEmail = async (args: {confirmToken: string}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/auth/confirmEmail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const SendResetCode = async (args: {email: string}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/auth/sendResetCode', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const ResetPassword = async (args: {password: string; confirmToken: string}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/auth/resetPassword', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const ChangeEmail = async (args: {currentEmail: string; newEmail: string; password: string}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/user/changePassword', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const ChangePassword = async (args: {password: string; currentPassword: string}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/user/changeEmail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const GetUser = async () => {
  return await fetch('https://webi-server-production.up.railway.app/api/user/getUser', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'GET'
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const CreateService = async (args) => {
  return await fetch('https://webi-server-production.up.railway.app/api/service/createService', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const UpdateService = async (args) => {
  return await fetch('https://webi-server-production.up.railway.app/api/service/updateService', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const RemoveService = async (args) => {
  return await fetch('https://webi-server-production.up.railway.app/api/service/removeService', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const GetServiceById = async ({serviceId}) => {
  return await fetch(
    `https://webi-server-production.up.railway.app/api/service/getServiceById?serviceId=${serviceId}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
        'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
      },
      method: 'GET'
    }
  ).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const GetServices = async ({name, priceFrom, priceTo}: {name: string; priceFrom: string; priceTo: string}) => {
  return await fetch(
    `https://webi-server-production.up.railway.app/api/service/getServices?name=${name}&priceFrom=${priceFrom}&priceTo=${priceTo}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
        'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
      },
      method: 'GET'
    }
  ).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const GetPersonalServices = async () => {
  return await fetch('https://webi-server-production.up.railway.app/api/service/getPersonalServices', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'GET'
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const SupportRequest = async (data) => {
  return await fetch('https://webi-server-production.up.railway.app/api/auth/supportRequest', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const CreateOrder = async (serviceId) => {
  return await fetch('https://webi-server-production.up.railway.app/api/order/createOrder', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(serviceId)
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

// eslint-disable-next-line camelcase
export const UpdateOrder = async ({orderId, status, repository_link}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/order/updateOrder', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    // eslint-disable-next-line camelcase
    body: JSON.stringify({orderId, status, repository_link})
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

// eslint-disable-next-line camelcase
export const ResendOrderDetails = async ({orderId, repository_link}) => {
  return await fetch('https://webi-server-production.up.railway.app/api/order/resendOrderDetails', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    // eslint-disable-next-line camelcase
    body: JSON.stringify({orderId, repository_link})
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const CloseOrder = async (orderId) => {
  return await fetch('https://webi-server-production.up.railway.app/api/order/closeOrder', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'POST',
    body: JSON.stringify(orderId)
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const GetOrderById = async ({orderId}) => {
  return await fetch(`https://webi-server-production.up.railway.app/api/order/getOrderById?orderId=${orderId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'GET'
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const GetOrders = async () => {
  return await fetch('https://webi-server-production.up.railway.app/api/order/getOrders', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
      'Access-Control-Allow-Origin': 'https://webi-server-production.up.railway.app',
      'Access-Control-Allow-Headers': 'https://webi-server-production.up.railway.app'
    },
    method: 'GET'
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};
