async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    // console.log(conexaoConvertida)
    return conexaoConvertida
}

listaVideos()

export const conectaAPI = {
    listaVideos
}