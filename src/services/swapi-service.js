export default class SwapiService {
    _apiBase='https://swapi.dev/api';
    async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok){
        throw new  Error(`Could not fetch ${this._apiBase}${url} `);
    }
    return await res.json();
};
    async getallPeople() {
        const res= await this.getResource('/people/');
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`);
    }
     getallPlanets() {
        return this.getResource('/planets/');
        
    }
    getPlanet(id){
        return this.getResource(`/planets/${id}/`);
    }
    getallStarhips() {
        return this.getResource('/starships/');
        
    }
    getStarhip(id){
        return this.getResource(`/starships/${id}/`);
    }
}  



