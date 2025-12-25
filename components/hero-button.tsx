function ButtonHero() {
  return (
    <>
      <button className="group relative">
        <div
          className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
          bg-linear-to-r from-[#d55c39] to-[#eb3c10] 
           border-2 border-[#da8269]
          bg-transparent px-12 font-medium text-white 
          transition-all duration-300
          group-hover:-translate-x-3 group-hover:-translate-y-3 mt-4 cursor-pointer"
        >
          Book A Call
        </div>

        <div
          className="absolute inset-0 z-0 h-full w-full rounded-full
          transition-all duration-300
          group-hover:-translate-x-3 group-hover:-translate-y-3
          group-hover:[box-shadow:5px_5px_#eb3c10,10px_10px_#d55c39,15px_15px_#da8269]"
        />
      </button>
    </>
  );
}

export default ButtonHero;
