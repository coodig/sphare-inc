// export default function Footer(){
//     return (
//         <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center text-1 py-1 mt-10">
//             <p>&copy; {new Date().getFullYear()} <span className="font-bold hover:bg-red-300 mouse-pointer">Sphare Corp.&nbsp;</span>Sphare Corp. All rights reserved.</p>
//         </footer>
//     )
// }
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center px-4 py-2 mt-10 text-sm sm:text-base">
      <p className="flex flex-wrap justify-center items-center gap-1">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold hover:text-red-300 cursor-pointer">
          Sphare Corp.
        </span>
        All rights reserved.
      </p>
    </footer>
  );
}
