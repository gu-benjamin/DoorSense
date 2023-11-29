export const checkTicket = async (ticket: string | string[]) => {
  const body = ticket;
  try {
    const res = await fetch('/api/verify-ticket', {
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
