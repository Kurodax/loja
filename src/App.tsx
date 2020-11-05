import React from "react";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Principal from "./paginas/principal";
import Carinho from "./paginas/carinho";
import Entrega from "./paginas/entrega";
import Pagamento from "./paginas/pagamento";
import Produto from "./paginas/produto";
import Resumo from "./paginas/resumo";
import Usuario from "./paginas/usuario";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={Principal} />
        <Route  exact path="/carinho" component={Carinho} />
        <Route  exact path="/entrega" component={Entrega} />
        <Route  exact path="/pagamento" component={Pagamento} />
        <Route  exact path="/produto" component={Produto} />
        <Route  exact path="/resumo" component={Resumo} />
        <Route  exact path="/usuario" component={Usuario} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
