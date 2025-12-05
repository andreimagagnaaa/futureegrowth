import { useState } from 'react';
import { Modal } from './Modal';
import { Input } from './Input';
import { Button } from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', phone: '' });
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Agendar Sessão Estratégica" className="max-w-md border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-serif font-medium text-white mb-2">Solicitação Recebida</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Nossa equipe entrará em contato em breve para confirmar o agendamento.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <Input 
              label="Nome Completo" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome" 
              required 
              className="bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05]"
            />
            <Input 
              label="Empresa" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nome da sua empresa" 
              required 
              className="bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05]"
            />
            <Input 
              label="E-mail Corporativo" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com" 
              required 
              className="bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05]"
            />
            <Input 
              label="Telefone / WhatsApp" 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999" 
              required 
              className="bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05]"
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Agendamento'}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
