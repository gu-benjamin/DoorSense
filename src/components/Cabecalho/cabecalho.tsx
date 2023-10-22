
export default function Cabecalho() {
  return (
    <div className="p-4 border-b-2 dark:border-primary-100 border-primary-100 grid grid-flow-col justify-stretch text-sm sm:text-base text-primary-100">
      <p className={`dark:text-primary-100 text-center md:pr-6`}>
        Nome da Sala
      </p>
      <p className={`dark:text-primary-100 text-center xl:text-center xl:pr-8`}>
        Número
      </p>
      <p
        className={`dark:text-primary-100 text-center md:pr-6 xl:pr-14 xl:text-center`}
      >
        Arduíno
      </p>
      <p
        className={`dark:text-primary-100 text-center xl:text-center xl:pr-16`}
      >
        Status
      </p>
      <p
        className={`dark:text-primary-100 text-center hidden sm:block md:pr-8`}
      >
        Ações
      </p>
    </div>
  );
}
