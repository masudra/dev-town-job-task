import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [data, setData] = useState([])
    const [asc, setAsc] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/phones?sort=${asc ? 'asc' : 'deasc'}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [asc])

    const handelDatabase = (phoneList) => {
        const filterPhones = data.filter(phones => phones.category == phoneList)
        setData(filterPhones)
    }

    const phone = ["Apple", "Google", "Samsung"];
    const liClasses = "hover:bg-[#8484c9] hover:text-white rounded-xl"

    const phoneSector =
        <ul className="p-2 w-60 bg-[#c7cde3ec] bg-opacity-80 z-30">
            {
                phone.map(phoneList => <li
                    key={phoneList}
                    className={liClasses}>
                    <div onClick={() => handelDatabase(phoneList)} className="hover:text-white">
                        {phoneList}
                    </div >
                </li>)
            }
        </ul>


    return (
        <div>
            <div className=" lg:flex md:flex lg:justify-between md:justify-around lg:mx-20 md:mx-10 ml-5 ">
                <div className="navbar rounded-sm ">
                    <div className="navbar-start">
                        <ul className="menu menu-horizontal items-center px-1">
                            <li tabIndex={0}>
                                <details>
                                    <summary className=" font-bold text-xl">Categori</summary>
                                    {phoneSector}
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-2  text-xl my-4">
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
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-5">
                {
                    data.map(singelData => <Product key={singelData?._id} singelData={singelData}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;