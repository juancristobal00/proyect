const obtenerimagenes = container => [...container.queryselectorall('img')];

//Obtener un array de las rutas de las imagenes grandes
const getlargeimages = gallery => gallery
                                        .map( el => el.src)