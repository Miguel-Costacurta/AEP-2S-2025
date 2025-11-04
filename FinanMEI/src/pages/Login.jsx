import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    nav("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Nancify</h1>
        <form onSubmit={login} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
          />
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
            Entrar
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Não tem conta? <a href="#" className="text-purple-600">Registre-se</a></p>
      </div>
    </div>
  );
}
