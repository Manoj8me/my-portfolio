export default function Footer() {
  return (
    <footer className="py-4 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-lg mt-20">
      <p className="font-medium drop-shadow-md">
        © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
      </p>
    </footer>
  );
}
