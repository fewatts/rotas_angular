import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SegundaPagComponent } from "./segunda-pag/segunda-pag.component";
import { PrimeirapagComponent } from "./primeirapag/primeirapag.component";

const routes: Routes = [
    {path: 'primeira-pag', component: PrimeirapagComponent},
    {path: 'segunda-pag', component: SegundaPagComponent}
]

@NgModule({
    declarations: [], 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}