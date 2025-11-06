import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-50">
      {/* Formulário */}
      <div className="flex flex-col justify-center items-center p-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">FinanMEI</h1>
        <p className="text-gray-600 mb-6 text-center text-sm">
          Bem-vindo de volta. Faça login na sua conta ou crie uma nova.
        </p>

        <form className="w-full max-w-sm space-y-4">
          <Input label="Email" type="email" placeholder="seu@email.com" />
          <Input label="Senha" type="password" placeholder="********" />

          <div className="text-right text-sm">
            <a href="#" className="text-purple-600 hover:underline">Esqueceu a senha?</a>
          </div>

          <Button text="Entrar" />
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <span>Não tem uma conta?</span>{" "}
          <a href="#" className="text-purple-600 hover:underline">Cadastre-se</a>
        </div>

        <div className="mt-6 w-full max-w-sm">
          <div className="text-center text-sm text-gray-500 mb-2">Ou entre com</div>
          <div className="flex gap-2 justify-center">
            <Button text="Google" variant="outline" />
            <Button text="GitHub" variant="outline" />
          </div>
        </div>
      </div>

      {/* Mensagem lateral */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-b from-purple-100 to-purple-200">
        <div className="text-center px-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Organize suas finanças com facilidade</h2>
          <p className="text-gray-600 text-sm">
            Controle receitas, despesas e lucros em um só lugar. Comece agora com o FinanMEI!
          </p>
        </div>
      </div>
    </div>
  );
}
