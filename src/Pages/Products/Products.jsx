import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [data, setData] = useState([])
    const [asc, setAsc] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/phones?sort=${asc?'asc': 'deasc'}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [asc])


    return (
        <div>
            <div className="flex  gap-2 justify-end mr-20 text-xl my-4">
                <h1 className="my-auto font-bold">Sort By:</h1>
                <div>
                    <select onClick={() => (setAsc(!asc))} >
                        {
                            asc ? <option>Low to High Price</option> :
                                <option>High to Low Price</option>
                        }
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mx-5">
                {
                    data.map(singelData => <Product key={singelData?._id} singelData={singelData}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;