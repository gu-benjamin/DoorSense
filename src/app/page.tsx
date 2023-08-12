import Image from 'next/image'
import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';

export default function LoginPage() {
  return (
    <main className={`w-screen h-screen flex`}>

        {/* Right Column Image */}
        <aside className={`w-1/2 h-full`}>
            <img src="/images/Login.png" alt="login image" className={`w-full h-full`}/>
        </aside>

        {/* Left Column Form */}
        <section className={`p-6 pt-20 flex flex-col items-center justify-start w-1/2 h-full gap-12`}>

            <img src="/images/Logo.png" alt="" className={``}/>

            <h1 className={`text-primary font-extrabold text-6xl`}>Login</h1>
            <p className={`font-regular text-lg`}>Conecte-se usando o usuário de administrador</p>

            <form action="" className={`flex flex-col items-center gap-10 w-2/3`}>
                <div className="flex flex-col justify-start gap-4 w-1/2 relative mb-4" data-te-input-wrapper-init>
                <div className='absolute'>
                <IconUser width={30} height={30} color={'#05AFF2'}/>
                </div>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full pl-10 border-b-2 border-primary bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="InputUser"
                        placeholder="" />
                    <label
                        id="FormUser"
                        
                        className="flex pointer-events-none pl-10 absolute left-0 top-0 mb-0 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        > Digite seu usuário
                    </label>
                </div>
                <div className="flex flex-col justify-start gap-4 w-1/2 relative mb-4" data-te-input-wrapper-init>
                    
                    <input
                        type="password"
                        className="peer block min-h-[auto] w-full border-b-2 border-primary bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="InputPassword"
                        placeholder="Example label" />
                        
                    <label
                        id="FormPassword"
                        className="pointer-events-none absolute left-0 top-0 mb-0 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Digite sua senha
                    </label>
                </div>


                <div className={`flex flex-col w-1/2 mt-4 text-white`}>
                    <button type='submit' className={`bg-primary p-3 rounded-lg font-extrabold`}>ENTRAR</button>
                </div>

                {/* Link */}
                <a href="">Esqueceu a senha?</a>
            </form>

        </section>  
    </main>
  );
}
