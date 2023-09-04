import {useState, useEffect,useRef} from 'react'
import CardCity from "../components/CardCity.jsx";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
import NavLayout from '../layouts/NavLayout';
const { read_cities } = city_actions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  console.log(cities);
  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);
  function handleFilter() {
    console.log(text.current.value);
    setReEffect(!reEffect);
  }
  return (
    <NavLayout>
    <article className="bg-blue-200 flex grow flex-col justify-start items-center">
      <input
        ref={text}
        type="text"
        name="text"
        id="text"
        onKeyUp={handleFilter}
        placeholder="Search city"
        className="w-[310px] p-4 m-10 bg-gray-200 appearance-none border-2 m-10 border-slate-500 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
      />
      <section className="flex flex-wrap justify-evenly mb-2">
        {cities.map((each) => (
          <CardCity
            key={each._id}
            src={each.photo}
            alt={each._id}
            text={each.city}
            id={each._id}
          />
        ))}
      </section>
    </article>
    </NavLayout>
  );
}
