
export const Logout = async () =>{
    const res = await fetch('/api/login',{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      throw new Error('Falha ao autenticar');
    }

    return res.ok 
  }