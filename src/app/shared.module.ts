import { UseCaseComponent } from './pages/use-case/use-case.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipComponent } from './components/tooltip/tooltip.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations : SharedModule.COMPONENT_LIST,
    imports: SharedModule.MODULE_LIST,
    exports: [SharedModule.COMPONENT_LIST, SharedModule.MODULE_LIST]
})
    
export class SharedModule {

    static readonly MODULE_LIST = [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule 
    ];

    static readonly COMPONENT_LIST = [
        TooltipComponent,
        UseCaseComponent,
        
    ];
}