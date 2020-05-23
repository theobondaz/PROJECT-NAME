



const valeurImmo = () => {

    window.addEventListener('load', (event) => {
        
        const latitude = document.getElementById('flatlatitude').innerHTML;
        const longitude = document.getElementById('flatlongitude').innerHTML;
        fetch(`http://api.cquest.org/dvf?lat=${latitude}&lon=${longitude}&dist=200`)
        .then(response => response.json())
        .then((data) => {
            console.log(data.features)
            const appart = data.features

            appart.forEach(function(object){
                console.log('poop')
                const valeur = object.properties.valeur_fonciere;
                const finalcard = document.querySelector(".flatcard");

                const infocard = `<h3>
                "${object.properties.numero_voie}"
                "${object.properties.type_voie}"
                "${object.properties.voie}"
                </h3>

                <p>
                "${object.properties.type_local} - "
                "${object.properties.nombre_pieces_principales} - "
                "${object.properties.surface_lot_2} "
                </p>


                <h2>
                "${object.properties.valeur_fonciere}"
                "Vendu le ${date_mutation} "
                </h2>
                `


                finalcard.insertAdjacentHTML('afterbegin', infocard );
                console.log(object.properties.valeur_fonciere);
                
                
            })

            
          
         
          
        })

    })
}
 




export { valeurImmo }




        /*
           console.log('moncul')
                       data.forEach(function(object){
                           console.log('poop'),
                           console.log(object.features.properties.valeur_fonciere)
                       })

*/