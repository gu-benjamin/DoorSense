export const checkTicket = async (ticket: string) => {
  const body = ticket;
  try {
    const res = await fetch('/api/check-cookies', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.json();
  } catch (error) {
    console.log('error', error);
  }
};
