import Header from './components/Header'; 

const Blacklisted = () => {
    return (
        <>
            <Header title="404 - Not Found" />
            <div className="bg-zinc-950 relative h-full w-screen overflow-scroll-left flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-9xl p-2 font-semibold bg-gradient-to-br from-white to-zinc-700 bg-clip-text text-transparent text-center">
                    BLACKLISTED
                </h1>
                <h1 className="text-xl md:text-l p-2 font-semibold bg-gradient-to-br from-white to-zinc-700 bg-clip-text text-transparent text-center">
                    YOU HAVE BEEN BLACKLISTED FROM THIS HOLACLIENT-E1 INSTANCE
                </h1>
            </div>
        </>
    );
};

export default Blacklisted;
