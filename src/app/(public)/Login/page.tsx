import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="">

        <div className="flex rounded-3xl shadow-lg overflow-hidden m-auto max-w-sm lg:max-w-2x1 items-center justify-center">
            <div
            className="block rounded-3xl bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
            
                <div
                className="flex items-center rounded-b-lg sm:w-1/2 lg:w-6/12 lg:rounded-l-lg lg:rounded-br-lg">
               
                    <Image
                        src="/public/login_img.png"
                        alt="Login image"
                        className="mx-auto w-full"
                        width={100}
                        height={100}

                    />
                </div>
            
                <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                    
                    <div className="text-center">

                        <Image
                            src="/public/Logo.png"
                            alt="DoorSense Logo"
                            className="mx-auto w-2"
                            width={100}
                            height={100}

                        />
                    <h4 className="mb-6 mt-6 pb-1 text-4xl font-bold text-blueprincipal">
                        Login
                    </h4>
                    </div>
    
                    <form>
                    <p className="mb-12 text-center">Conecte-se usando o usuário de administrador</p>
                    
                    <div className="relative mb-12" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="UsernameInput"
                        placeholder="Username" />
                        <label
                        htmlFor="exampleFormControlInput1"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Digite o usuário...
                        </label>
                    </div>
    
                    
                    <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="PasswordInput"
                        placeholder="Password" />
                        <label
                        htmlFor="exampleFormControlInput11"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Digite a senha...
                        </label>
                    </div>
    
                    
                    <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                        className="mb-7 bg-blueprincipal inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Entrar
                        </button>
    
                        
                        <a href="#!">Esqueceu a senha?</a>
                    </div>

                    </form>
                </div>
                </div>

            </div>
            </div>
        </div>
        </div>
  );
    
}
