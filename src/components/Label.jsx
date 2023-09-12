import { Link as Anchor } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Label({ options }) {
  let photo = useSelector((store) => store.users.user?.photo);
  return (
    <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/signin" ? (
              <Anchor
                key={each.to}
                to={each.to}
                className="text-blue-700 h-[35px] text-[15px] px-1 bg-blue-300 w-[90px] flex justify-center items-center mx-0.2"
              >
                {each.title}
              </Anchor>
            ) : (
              <Anchor
                key={each.to}
                to={each.to}
                className="text-blue-700 h-[35px] text-[15px] px-1 bg-blue-300 w-[90px] flex justify-center items-center mx-0.2"
              >
                {each.title}
              </Anchor>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                className="text-blue-700 h-[35px] text-[15px] px-1 bg-blue-300 w-[90px] flex justify-center items-center mx-0.2"
              >
                {each.title}
              </span>
            )
      )}
      {photo && (
        <img
          src={photo}
          className="h-[50px] w-[50px] object-cover bg-white rounded-xl mx-1 hidden lg:flex"
        />
      )}
    </div>
  );
}




/*
export default function Label({ options }) {
  return (
    <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
      {options.map((each) => (
        <Anchor
          key={each.to}
          to={each.to}
          className="text-blue-700 h-[35px] text-[15px] px-1 bg-blue-300 w-[90px] flex justify-center items-center mx-0.2"
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
}*/