import { ref } from "vue"

class DataServices{

    constructor () {
        this.data = ref({
            results: '',
            info: ''
        })
    }

    getData(){
        return this.data
    }

    async fetchData () {
        try {
            const url = "https://rickandmortyapi.com/api/character/"
            const response = await fetch(url)
            if (response.ok) {
                const json = await response.json()
                const data = await json 
                this.data.value.results = data.results
                this.data.value.info = data.info
            } else {
                console.log(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

}

export default DataServices