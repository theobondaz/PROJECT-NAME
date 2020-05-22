



const valeurImmo = () => {

    window.addEventListener('load', (event) => {
        
        const latitude = document.getElementById('flatlatitude').innerHTML;
        const longitude = document.getElementById('flatlongitude').innerHTML;
        fetch(`http://api.cquest.org/dvf?lat=${latitude}&lon=${longitude}&dist=200`)
        .then(response => response.json())
        .then((data) => {
            console.log(data.features)
            const appart = data.features

            appart.forEach(function(object, index){
              
                console.log(object[index].properties.valeur_fonciere)
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