import Image from 'next/image'

export default function LoginPage() {
  return (
    <main className={`w-screen h-screen flex flex-row`}>

        <aside className={`w-2/3 h-full`}>
            <img src="/images/login_img.png" alt="login image" className={`w-full h-full`}/>
        </aside>

        <section className={`p-6 pt-20 flex flex-col items-center justify-start w-1/3 h-full gap-12`}>

            <img src="/images/Logo.png" alt="" className={``}/>

            <h1 className={`text-primary font-extrabold text-6xl`}>Login</h1>
            <p className={`font-regular text-lg`}>Conecte-se usando o usuário de administrador</p>

            <form action="" className={`flex flex-col items-center gap-10 w-2/3`}>

                <div className={`flex flex-col justify-start gap-4 w-full`}>
                    {/* <label htmlFor="">Usuário</label> */}
                    <input type="text" placeholder='Digite seu usuário ...' className={`w-full p-2`}/>
                </div>

                <div className={`flex flex-col justify-start gap-4 w-full`}>
                    {/* <label htmlFor="">Senha</label> */}
                    <input type="text"  placeholder='Digite sua senha ...' className={`w-full p-2`}/>
                </div>

                <div className={`flex flex-col w-1/2 mt-4 text-white`}>
                    <button type='submit' className={`bg-primary p-3 rounded-lg font-extrabold`}>ENTRAR</button>
                </div>

            </form>

        </section>  
    </main>
  );
    
}
