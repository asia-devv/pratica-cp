

const Contato = () => {
  return (
    <main className="grow flex items-center justify-center px-5 ">

      <div className="bg-amber-100 p-8 sm:p-10 rounded-[20px] w-full max-w-md shadow-2xl border-2 border-[#ff00aa]">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ff00aa] text-center mb-6 uppercase">
          Fale Conosco 
        </h2>

        <p className="text-gray-500 text-center mb-4">
          Entre em contato com o nosso E-mail
        </p>

        <a
          href="mailto:suporte@asiatoys.com"
          className="block text-center text-[#ff00aa] font-semibold hover:underline transition-all"
        >
          suporte@asiatoys.com
        </a>

      </div>

    </main>
    
  )
}

export default Contato
