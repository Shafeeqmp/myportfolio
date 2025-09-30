export default function FooterDe() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50">
            <div className="flex justify-center items-center gap-2 py-3 px-6 bg-white/10 backdrop-blur-lg border-t border-white/20 transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-xl">
                <p className="text-white/90 text-sm transition-all duration-300 hover:text-white">Made With</p>
                <span className="text-red-500 text-lg transition-transform duration-300 hover:scale-125">❤</span>
                <p className="text-white/90 text-sm transition-all duration-300 hover:text-white">by</p>
                <p className="text-blue-400 font-semibold text-sm transition-all duration-300 hover:text-cyan-400">Shafeeq</p>
                <p className="text-white/90 text-sm transition-all duration-300 hover:text-white">© {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}