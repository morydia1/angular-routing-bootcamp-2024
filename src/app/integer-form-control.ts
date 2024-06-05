import { FormControl } from "@angular/forms";

export class IntegerFormControl extends FormControl{

    override setValue(value: any, options?: { onlySelf?: boolean | undefined; emitEvent?: boolean | undefined; emitModelToViewChange?: boolean | undefined; emitViewToModelChange?: boolean | undefined; } | undefined): void {
        if(value.match(/[^0-9|\/]/gi) ){
            super.setValue(this.value, {...options, emitModelToViewChange: true})
            return;
        }

        if(value.length > 3){
            super.setValue('', {...options, emitModelToViewChange: true})
            return;
        }


        super.setValue(value, {...options, emitModelToViewChange: true});
    }
}
