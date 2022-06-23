import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
/*
 *Aviso:Não podemos adicionar diretamente componente embaixo de outro componente.
 */
export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
