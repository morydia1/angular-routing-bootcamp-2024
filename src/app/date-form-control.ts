import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl{

    override setValue(value: string | null, options?: any) {

        if(!value){
            super.setValue('', {...options, emitModelToViewChange:true})
            return;
        }

        if(value.match(/[^0-9|\/]/gi) || value.length > 5){
            super.setValue(this.value, {...options, emitModelToViewChange: true})
            return;
        }
        
        if(value.length === 2 && this.value.length < value.length){
            super.setValue(value + '/', {...options, emitModelToViewChange: true})
            return;
        }

        if(value.length === 3){
            if(this.value.length === value.length + 1){
                super.setValue(value.substring(0,2), {...options, emitModelToViewChange: true})
                return;
            }

            if(this.value.length < value.length){
                super.setValue(value.substring(0,2) + '/'+ value.substring(2,3), {...options, emitModelToViewChange: true})
                return;
            }
        }

        super.setValue(value, {...options, emitModelToViewChange: true});
    }

}
