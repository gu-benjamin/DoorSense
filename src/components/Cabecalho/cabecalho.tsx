
export default function Cabecalho() {

  return (
    <div className="sm:grid-cols-5 grid-cols-4 p-4 border-b-2 dark:border-primary-100 border-primary-100 w-full grid grid-flow-col justify-stretch text-sm sm:text-base text-primary-100">  

        <p className={`dark:text-primary-100 text-center `}>
          Nome da Sala
        </p>
        <p className={`dark:text-primary-100 text-center `}>
          Número
        </p>
        <p
          className={`dark:text-primary-100 text-center `}
        >
          Arduíno
        </p>
        <p
          className={`dark:text-primary-100 text-center `}
        >
          Status
        </p>
        <p
          className={`dark:text-primary-100 text-center hidden sm:block`}
        >
          Ações
        </p>
    </div>
  );
}
