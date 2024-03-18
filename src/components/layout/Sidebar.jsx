export  const Sidebar = ({setOpenDialog}) => (
  <sidebar className="w-3/12 border-r-4 b h-full flex col justify-center items-start gap-4 bg-violet-300 p-4" >
    <div className="border-b-2 border-gray-300 w-full " onClick={() => setOpenDialog(true)}>
      <p className="text-lg font-semibold p-4 cursor-pointer">Actividades</p>
    </div>
  </sidebar>
);



