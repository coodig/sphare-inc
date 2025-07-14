// import ThemeToggle from './ThemeToogle';

// export default function Header(){
//     return(
//          <header className="fixed top-0 left-0 w-full z-50 bg-pink-200 text-black  flex px-6 py-1 shadow items-center justify-between text-sm sm:text-base">
//       <h1 className="text-2xl font-bold">Sphare Inc</h1>
//        <ThemeToggle />
//     </header>
//     )
// }

import ThemeToggle from '../components/ThemeToogle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pink-200 text-black flex items-center justify-between px-4 sm:px-6 py-2 shadow text-sm sm:text-base">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap">
        Sphare Inc
      </h1>
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}
