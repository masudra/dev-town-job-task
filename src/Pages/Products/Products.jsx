import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const url = ('../../../public/data.json')
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="flex  gap-2 ml-10">
                <h1 className="my-auto">Sort By:</h1>
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mx-5">
                {
                    data.map(singelData => <Product singelData={singelData}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;