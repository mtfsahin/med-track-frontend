import React, {createContext,useState,useEffect} from "react";
import axios from "axios";

export const medContext = createContext();

 export const medProvider = ({children}) => {

    const [meds, setMeds] = useState([]);
    const [nextData, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nextLoading, setNezxtLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchMedData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_URL}`);
                
                setMeds(response)
                
                console.log(response);

                
            }catch(error){

            }finally{
                
            }
        }

        fetchMedData();

    }, []);

    return(
        <medContext.Provider value={{meds}} >
            {children}
        </medContext.Provider>
    )

 }

 