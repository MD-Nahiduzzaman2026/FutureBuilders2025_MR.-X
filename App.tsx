import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation, DesktopHeader } from "@/components/Navigation";
import Home from "@/pages/Home";
import Checkup from "@/pages/Checkup";
import Facilities from "@/pages/Facilities";
import Emergency from "@/pages/Emergency";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <DesktopHeader />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/checkup" component={Checkup} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/emergency" component={Emergency} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Navigation />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
