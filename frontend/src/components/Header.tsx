import ThemeToggle from './ThemeToogle';

export default function Header(){
    return(
         <header className="fixed top-0 left-0 w-full z-50 bg-red-500 text-shadow-gray-900  flex px-6 py-1 shadow items-center justify-between">
      <h1 className="text-2xl font-bold">Sphare Inc</h1>
       <ThemeToggle />
    </header>
    )
}``