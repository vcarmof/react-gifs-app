

export const getGifs = async (category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0RcoBzpBe3jxMd0PynxANNukSC8rfMg3&limit=10&q=${encodeURI(category)}`
    const respuesta= await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => { 

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    // console.log(gifs);
    return gifs;
}   