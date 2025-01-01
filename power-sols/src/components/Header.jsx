import logo from '../assets/logo.jpeg';

const Header = () => {
    return (
        <>
            <header className="bg-slate-100 shadow py-4 px-6 flex items-center justify-start">
                <img src={logo} alt="Logo" className="mr-4 w-[35%] h-auto" />
            </header>
        </>
    );
};

export default Header;
