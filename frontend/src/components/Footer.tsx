export default function Footer(){
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center text-1 py-1 mt-10">
            <p>&copy; {new Date().getFullYear()} <span className="font-bold hover:bg-red-300 mouse-pointer">Sphare Corp.&nbsp;</span>Sphare Corp. All rights reserved.</p>
        </footer>
    )
}