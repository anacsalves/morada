export default function Home() {
  return (
    <>
    
     <header className="w-full h-48 bg-cinza flex flex-col ">

      <section id="texto" className="flex flex-row py-3.5">

      <picture>
      <img  className="h-32 w-auto px-4" src="img/logoMovel.jpeg" alt="" />
      </picture>
      
      <section className="flex flex-col text-center px-12">
        <h1 className="text-7xl font-bold text-marrom ">MORADA</h1>
        <h2  className="text-4xl font-semibold text-marrom ">AMBIENTES PLANEJADOS</h2>
      </section>
      

      <section className="w-2/5 space-x-8 px-16 flex flex-row items-center justify-items-stretch font-['IM_FELL_Double_Pica'] text-marrom text-2xl text-decoration-line: underline decoration-branco ">
       <a href="#portfolio" className="hover:decoration-marrom"><h3>PORTFÓLIO</h3></a> 
       <a href="#sobre" className="hover:decoration-marrom"><h3>SOBRE</h3></a> 
       <a href="#contato" className="hover:decoration-marrom"><h3>CONTATO</h3></a> 
      </section>
      </section>

        <section className="w-full h-5 bg-marrom flex "></section>
        <section className="w-full h-2 bg-cinza flex"></section>
        <section className="w-full h-5 bg-laranja flex"></section>

     </header>

<section id="portfolio">
      <h2 className="text-6xl text-marrom text-center py-8 font-['IM_FELL_Double_Pica']">PORTFÓLIO</h2>

     <div className="carousel w-full">
  
  <div id="item1" className="carousel-item relative w-full justify-center">
    <img
      src="img/cozinha 2.png"
      className="w-1/2" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item4" className="btn btn-circle">❮</a>
      <a href="#item2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="item2" className="carousel-item relative w-full justify-center">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
      className="w-1/2" />
     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item1" className="btn btn-circle">❮</a>
      <a href="#item3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="item3" className="carousel-item relative w-full justify-center">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
      className="w-1/2" />
     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item2" className="btn btn-circle">❮</a>
      <a href="#item4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="item4" className="carousel-item relative w-full justify-center">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
      className="w-1/2 mx-4" />
     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item3" className="btn btn-circle">❮</a>
      <a href="#item1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="flex w-full justify-center gap-2 pt-2 pb-8">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
     </section>


     <section id="sobre" className="my-16 w-full flex flex-row bg-laranja">
     <picture>
        <img src="img/image.png" alt="" className="h-full"/>
      </picture>

      <div className="flex flex-col w-1/2 px-20">
        <h2 className=" text-6xl text-branco justify-items-center text-center py-8 font-['IM_FELL_Double_Pica']">SOBRE</h2>
        <p className="text-branco text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto modi enim aliquid sequi est fugit nulla sed aperiam non. Sed aliquid et impedit ab at molestias, maxime eos, similique ipsam hic, explicabo nihil provident laborum itaque minima doloribus perferendis eius quasi deserunt veritatis quis! Enim officia sit voluptas? Consequatur?</p>
        <br />
        <p className="text-branco text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, officia dolores. Nemo illum aperiam facere quo harum ratione nesciunt voluptatem sint tenetur, aspernatur illo dolore laborum autem ex itaque nostrum?</p>
       
      </div>    
     </section>

     <section id="contato" className="bg-marrom h-80">
     <h2 
      className=" text-6xl text-branco justify-items-center text-center py-8 font-['IM_FELL_Double_Pica']">
        CONTATO
     </h2>

     </section>

     </>
         
  );
}
