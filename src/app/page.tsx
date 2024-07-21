export default async function Home() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The Bear
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Some text here.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Sign In
          </button>
          <button className="px-4 py-2  text-white ">Take a Peek 👀</button>
        </div>
    </div>

  )
}
