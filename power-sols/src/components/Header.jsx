import logo from '../assets/solar-logo.png';

const Header = () => {
    return (
        <>
            <header className="bg-slate-100 shadow py-4 px-6 flex items-center">
                <img src={logo} alt="" className="mr-4" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold">Power Solutions</h1>
                    <p className="text-sm text-gray-500">Solar, Battery, EV Charger and many more</p>
                </div>
            </header>
        </>
    );
};

export default Header;
