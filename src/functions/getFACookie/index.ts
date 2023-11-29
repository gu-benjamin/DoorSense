export const getFACookie = async () => {
  try {
    const res = await fetch('/api/check-cookies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.json();
  } catch (error) {
    console.log('error', error);
  }
};
