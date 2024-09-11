import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { auth } from "../../services/firebaseConnection";

export function Login() {
  const [email, setEmail] = useState("user@teste.com");
  const [password, setPassword] = useState("@user123");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Usuário logado Com Sucesso!");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        alert("Erro ao fazer Login!\n\n" + error);
      });
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-2"
      >
        <Input
          placeholder="Digite o seu email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="*********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white"
        >
          Acessar
        </button>

        <div className=""></div>
        {/* Painel com mensagem */}
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-md">
          <p className="text-center font-medium">
            Ainda não tem uma conta?{" "}
            <Link to="/login" className="text-blue-400 underline">
              Registre-se
            </Link>
          </p>
          <p className="text-center text-sm mt-2">
            Para recuperar sua senha, clique{" "}
            <Link to="/login" className="text-blue-400 underline">
              aqui
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
