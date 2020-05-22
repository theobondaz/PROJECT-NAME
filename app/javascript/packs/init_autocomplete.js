import places from 'places.js';

const initAutocomplete = () => {
  const addressInput = document.getElementById('flat_address');
  if (addressInput) {
    places({ container: addressInput });
  }
};


const extractAddress = () => {
    const addressInput = document.getElementById('flat_address');
    addressInput.onkeydown = function(){
        console.log(addressInput.value)
    }

    
    const address = addressInput.innerHTML
};

export { initAutocomplete };
export { extractAddress };