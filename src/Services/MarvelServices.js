class MarvelAPI {

    _apiBase = "https://gateway.marvel.com:443/v1/public/"
    _apiKey = "apikey=dd69706baa8dfe5e85a310c813e43922"

     getResource = async (url) =>{

        let res = await fetch (url)

        if(!res.ok){
            throw new Error (`Clould not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = async()=>{
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
       
        return res.data.results.map(this._transformChar)
    }

    getOneCharacter = async(id)=>{
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
        return this._transformChar(res.data.results[0])
    }

    _transformChar=(char)=>{
        return{
                id:char.id,
                name: char.name,
                description:char.description,
                thumbnail:char.thumbnail.path + '.' + char.thumbnail.extension,
                homePage: char.urls[0].url,
                wiki: char.urls[1].url,
              }
        
    }
}

export default MarvelAPI