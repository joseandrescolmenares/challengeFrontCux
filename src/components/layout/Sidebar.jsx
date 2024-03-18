import { sidebar } from "../../lib/constants";

export const Sidebar = ({ setOpenDialog }) => (
  <sidebar className="w-3/12 border-r-4 b h-full flex flex-col justify-start items-start gap-4 bg-violet-300 p-4">
    {sidebar.map((element) => (
      <div
        key={element.title}
        className="border-b-2 border-gray-300 w-full "
        onClick={() => {
          if (element.title === "Actividad") {
            setOpenDialog(true);
          }
        }}
      >
        <p className="text-lg font-semibold p-4 cursor-pointer">
          {element.title}
        </p>
      </div>
    ))}
  </sidebar>
);
