import { Link as Anchor } from "react-router-dom"

export default function Display({ options }) {
  return (
    <div className="flex absolute top-[50px] gap-2 flex flex-col bg-grey-400 p-1">
      {options.map(each=> <Anchor key={each.to} to={each.to} className="text-blue-700 h-[35px] text-[15px] px-1 bg-blue-300 w-[90px] flex justify-center items-center mx-0.2">{each.title}</Anchor>)}
    </div>
  )
}
