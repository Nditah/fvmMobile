// Generate by @vengardus 2019-03-08 16:53:08.810902

import { TOParametros } from 'src/app/models/to/TOparametros';

export class Parametros{
    private aTOParametros:TOParametros[]=[];
    private dataStorage:any=null;

    constructor ( dataStorage?:any ) {
        if ( dataStorage )
            this.dataStorage = dataStorage;
    }

    private add(itemDataStorage:any) {
        let oTOParametros = new TOParametros(itemDataStorage);
        this.aTOParametros.push(oTOParametros);
    }

    getAll(dataStorage?:any) {
        this.aTOParametros = [];  
        if ( dataStorage )      
            this.dataStorage = dataStorage
        for ( let item of this.dataStorage ) 
            this.add(item);
    }

    getATOParametros():TOParametros[] {
        return this.aTOParametros;
    }

    setATOParametros(value:TOParametros[]) {
        this.aTOParametros = value;
    }


    /*--------------------------------------------------------------------
                        Funcionalidad adicional
    ----------------------------------------------------------------------*/
    
}
