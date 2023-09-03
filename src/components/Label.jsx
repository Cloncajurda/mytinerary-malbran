import { Link as Anchor } from "react-router-dom";

export default function Label({ options }) {
  return (
    <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
      {options.map((each) => (
        <Anchor
          key={each.to}
          to={each.to}
          className="text-purple-500 h-[30px] text-[20px] px-2 hover:bg-gray-100  w-[100px] flex justify-center items-center mx-1"
          style={{
            backgroundColor: each.backgroundColor,
            color: each.color,
            hover: each.hover,
          }}
        >
          {each.title}
        </Anchor>
      ))}
    </div>
  );
}