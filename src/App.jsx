import MainLayout from "./layouts/MainLayout"
import NavLayout from "./layouts/NavLayout"
import CardPolaroid from "./components/CardPolaroid"

function App() {
  const description = `MyTinerary`

  let data = [
    {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
    {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
    {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
    {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
    {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
    {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
    {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
    {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
    {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
    {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
    {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
    {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
    {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
    {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
    {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
    {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
  ]
  return (
    <NavLayout>
      <h2 className="m-[10px] text-[10px] font-extrabold">{`${description}`}</h2>
      <main className="justify-center items center flex">
        <div className="w-100 justify-center ml-[50px] mt-[60px] mr-[50px]">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Find the perfect destination
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planing your next trip has never been easier.
          </p>
          <div>
            <button type="button" className="inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              View More
            </button>
          </div>
        </div>

        {  /*carrusel */}
        <div className="justify-center">
          <div id="indicators-carousel" className="flex justify-center items-center">
            <button type="button" className="m-1" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none border-2 m-1 border-slate-300">
              <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span className="sr-only">Previous</span>
              </span>
            </button>
            <div className="flex flex-wrap justify-center">
              {data.slice(4,8).map(each=> <CardPolaroid key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
            </div>
            <button type="button" className="" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none border-2 m-1 border-slate-300">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </main>
    </NavLayout>
  )
}

export default App
