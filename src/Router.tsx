import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Evento";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event" element={<Event></Event>} />
      <Route path="/event/lesson/:slug" element={<Event></Event>} />
    </Routes>
  );
}
