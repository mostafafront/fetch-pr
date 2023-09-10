import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export default function FetchData() {

    const [api, setApi] = useState([])
    //juz, page, sura, sura_name, aye, text

   
    useEffect(() => {
        axios.get('/api/get_pack/1')
        .then(res => setApi(res.data.pack))
    }, [])


    return(
        
    <table class="table table-dark table-bordered text-center table-hover" dir="rtl">

    <thead>

        <tr className="text-center">
        <th >جز</th>
        <th >صفحه</th>
        <th >سوره</th>
        <th >اسم سوره</th>
        <th >آیه</th>
        <th >متن</th>
        </tr>
    </thead>

    <tbody>

    {api.map((item) => 
        <tr>
        <td>{item.juz}</td>
        <td>{item.page}</td>
        <td>{item.sura}</td>
        <td>{item.sura_name}</td>
        <td>{item.aya}</td>
        <td>{item.text}</td>
        </tr>
    )}

    </tbody>


    </table>
            
    )
}