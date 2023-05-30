import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { primeiroComponente } from '../../../fundamentos-angular/src/app/primeiro-components/primeiro-componente.components';
import { AppComponent } from "./app.component";
import { SegundaPagComponent } from "./segunda-pag/segunda-pag.component";

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'segunda', component: SegundaPagComponent}
]

@NgModule({
    declarations: [], 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}