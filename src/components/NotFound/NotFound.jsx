import React from "react";
import { Link } from "react-router-dom";


export const NotFound = () => {
  return (
    <div className="text-center mx-auto">
      <h1 className="mt-4 p-4">Error 404, Page Not Found !</h1>

      <Link className="text-cyan-800" to="/">Cliquez ici pour revenir sur la page d'accueil</Link>
    </div>
  );
};
