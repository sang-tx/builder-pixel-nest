import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/business"
            element={<PlaceholderPage title="事業内容" />}
          />
          <Route path="/news" element={<PlaceholderPage title="お知らせ" />} />
          <Route path="/fleet" element={<PlaceholderPage title="運航船腹" />} />
          <Route
            path="/careers"
            element={<PlaceholderPage title="採用情報" />}
          />
          <Route
            path="/contact"
            element={<PlaceholderPage title="お問い合わせ" />}
          />
          <Route path="/company" element={<Index />} />
          <Route
            path="/message"
            element={<PlaceholderPage title="社長ご挨拶" />}
          />
          <Route
            path="/officers"
            element={<PlaceholderPage title="役員一覧" />}
          />
          <Route path="/history" element={<PlaceholderPage title="沿革" />} />
          <Route
            path="/privacy"
            element={<PlaceholderPage title="プライバシーポリシー" />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
