import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-8">
      <section>
        <div className="p-16">
          <h1 className="text-center text-5xl italic text-blue-400 font-bold">
            Bienvenido a UConv...
          </h1>
        </div>

        {/* Description */}
        <div className="pl-8 pb-6">
          <p>
            Esta es una sencilla aplicación para realizar
            diversas conversiones de medidas, <br />
            Longitud, Area, Volúmen,etc. Hecha con fines
            puramente didácticos.
          </p>
        </div>
      </section>

      <div className="mt-8">
        <Link
          className="bg-indigo-700 pl-14 pt-2 pr-14 pb-2 text-2xl font-sans rounded-3xl"
          to={'/conversions/fromto'}
        >
          Ir a la App...
        </Link>
      </div>

      {/* Footer */}
      <div className="pt-14">
        <footer>
          <p className="bg-transparent text-center">
            &copy; {new Date().getFullYear()} MTMSoftware.
            Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
