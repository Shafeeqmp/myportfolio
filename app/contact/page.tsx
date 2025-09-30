export default function ContactPage() {
  return (
    <div className="bg-indigo-950 w-full min-h-screen flex flex-col px-4">
      <div className="flex flex-col items-center mt-25 mb-8">
        <h2 className="select-none font-bold text-white text-3xl text-center">
          Contact Me
        </h2>
        <div className="bg-blue-500 rounded-lg w-48 md:w-96 h-1 mt-3 shadow-md"></div>
      </div>

      <form className="max-w-md mx-auto w-full bg-black/20 p-6 rounded-xl shadow-lg backdrop-blur-sm">
        <div className="mb-4 flex flex-col items-start">
          <label className="text-white/40 mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-white/20 text-white border border-white/40 rounded-sm w-full p-2 cursor-text
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4 flex flex-col items-start">
          <label className="text-white/40 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="bg-white/20 text-white border border-white/40 rounded-sm w-full p-2
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4 flex flex-col items-start">
          <label className="text-white/40 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-white/20 text-white border border-white/40 rounded-sm w-full p-2
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
