
export const getImagen = async () => {
    try {
        const API_KEY_GIPHY = "buscarAPI";

        const resp = await fetch(
          `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY_GIPHY}`
        );
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



