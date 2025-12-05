import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === 'andrei@futuree.org' && password === '2610') {
      localStorage.setItem('futuree_auth', 'true');
      navigate('/business');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
              F
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Futuree Business</h1>
            <p className="text-gray-400 text-sm">Acesso restrito ao sistema interno</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-lg py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
            >
              Entrar no Sistema
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
        
        <div className="text-center mt-6 text-xs text-gray-600">
          &copy; 2025 Futuree Growth. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};
