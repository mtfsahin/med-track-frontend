import React, { useEffect, useState } from "react";
import Button from "../ButtonComponent/Button";
//import axios from "axios";

const ListComponent = ({ }) => {

    const [meds, setMeds] = useState([]);

    useEffect(() => {


        const fetchMedData = async () => {
            try {
                fetch("https://jsonplaceholder.typicode.com/comments/")
                    .then((res) => res.json())
                    .then(data => setMeds(data))


            } catch (error) {

            } finally {

            }
        }

        fetchMedData();

    }, []);


    return (
        <div className="h-40 sticky sm:h-58 overflow-y-auto pr-5 pt-1 mt-4">
            <div className="flex items-center py-2 pl-2 border-b-1 border-l-2  pr-2">
                <button
                    className="text-chamois-950 mr-2 cursor-pointer" >asd </button>
            {/* Text uzunluğu 30 karakteri geçince ... işareti ile devam etmesini sağladım */}
            <p className={`text-chamois-950`}>
                asd
            </p>

            <Button className="text-chamois-950 ml-auto cursor-pointer" >asd </Button>
        </div>
            
            
            {/* {meds.map((med) => (
                <div key={med.id} className="flex items-center py-2 pl-2 border-b-1 border-l-2  pr-2">
                    
                        <p className="row-span-1">
                            {med.name}
                        </p>
                        <p>
                            {med.id}
                        </p>
                   
                    <div className="row-span-2 flex justify-center">
                        <Button >Edit</Button>
                    </div>    
                </div>
            ))} */}
        </div>
    );
}

export default ListComponent;


