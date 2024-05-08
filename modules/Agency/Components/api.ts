export const SendContact = async (args) => {
  return await fetch('https://webi-server-production.up.railway.app/api/agency/sendContact', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(args)
  }).then((data) => {
    if (!data.ok) return;

    return data.json();
  });
};
