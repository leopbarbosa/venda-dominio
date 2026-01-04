export function Footer() {
  return (
    <footer className="bg-primary text-white/40 py-8 border-t border-white/10">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PierItapema.com.br. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Este site não tem afiliação oficial com o empreendimento Píer Oporto. É uma landing page para venda de domínio.
        </p>
      </div>
    </footer>
  );
}
