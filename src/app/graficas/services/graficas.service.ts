import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {

    return this.getUsuariosRedesSociales()
        // pasar por pipe para transformar los datos.
        .pipe(
          delay(1500),

          // map permite tomar la respuesta de un Observable y retornar cualquier cosa
          map( data => {
            // saco los labels
            const labels = Object.keys( data );
            
            // saco los valores
            const values = Object.values( data );

            // retorno un arreglo con otros dos arreglos
            return { labels, values };
          })
        )
  }

}
