



const valeurImmo = () => {

    window.addEventListener('load', (event) => {
        
        const latitude = document.getElementById('flatlatitude').innerHTML;
        const longitude = document.getElementById('flatlongitude').innerHTML;
        fetch(`http://api.cquest.org/dvf?lat=${latitude}&lon=${longitude}&dist=200`)
        .then(response => response.json())
        .then((data) => {
          
            console.log(data.features[0].geometry.coordinates[0]),
            console.log(data.features[0].geometry.coordinates[1])
         
          
        })

    })
}
 




export { valeurImmo }
