import Image from 'next/image';

interface FooterProps {

}

export default function Footer(props: FooterProps) {
  return (
      <div className=" bg-white">
          <div className="max-w-2xl mx-auto text-white py-10">
              <div className="text-center">
                  <h3 className="text-3xl mb-3 text-gray-500"> Alguma coisa Importante </h3>
                  <p> blz blz </p>
                  <div className="flex justify-center my-10">
                      <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                          {/*  */}
                          <div className="text-left ml-3">
                              <p className='text-xs text-gray-500'>Teste</p>
                              <p className="text-sm md:text-base">  </p>
                          </div>
                      </div>
                      <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                          {/*  */}
                          <div className="text-left ml-3">
                              <p className='text-xs text-gray-500'>Teste </p>
                              <p className="text-sm md:text-base">  </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                  <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2023. </p>
                  <div className="order-1 md:order-2">
                      <span className="px-2">Sla</span>
                      <span className="px-2 border-l">Fale Conosco</span>
                      <span className="px-2 border-l">Privacy Policy</span>
                  </div>
              </div>
          </div>
      </div>
  );
}
