function About() {
  return (
    <>
      <section className="container mx-auto max-w-screen-xl mt-[50px]">
        {/* Linea orizzontale */}
        <div className="w-52 mx-auto border-t-2 border-neutral-900"></div>

        {/* Titolo */}
        <h2 className="mt-10 mb-6 text-5xl font-semibold text-black text-center">
          Su di me
        </h2>

        {/* Contenitore flex per testo e immagine */}
        <div className="max-w-screen-xl mx-auto p-6 mt-[20px] flex flex-col md:flex-row items-center gap-8">
          {/* Testo */}
          <div className="flex-1">
            <p className="text-black leading-relaxed">
              Mi chiamo Desiree e sono una web developer.
              <br /><br />
              Durante il mio percorso di studi in Amministrazione, Finanza e Marketing, con specializzazione in Relazioni Internazionali, ho iniziato a sviluppare siti web concentrandomi principalmente sul front-end. Questa esperienza mi ha spinto a orientare la mia carriera verso lo sviluppo web.
              <br /><br />
              Dopo gli studi, ho seguito un corso intensivo presso Boolean, dove ho acquisito competenze in diverse tecnologie di sviluppo. Ho partecipato a vari progetti di gruppo, migliorando le mie capacità di problem solving, organizzazione e collaborazione.
              <br /><br />
              Sono una persona determinata, solare e motivata a crescere continuamente, affrontando nuove sfide con impegno e professionalità.
            </p>
          </div>

          {/* Immagine */}
          <div className="flex-1 flex justify-center">
            <img src="../monitor.png" alt="Monitor" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

    </>
  )
}

export default About