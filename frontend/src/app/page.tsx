import Image from "next/image";

export default function Home() {
  return (
		  <main className="min-h-screen bg-gradient-to-br from-rose-50 to-indigo-100 flex items-center justify-center p-6">
			<div className="text-center">
			  <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Eos </h1>
			  <p className="text-lg text-gray-600 mb-6">
				Your daily companion for clarity, balance, and well-being.
			  </p>
			  <button className="bg-orange-400 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
				Log Today
			  </button>
			</div>
		  </main>
		);
	  }
