import Modal from "../Modal/Modal";

const Product = ({singelData}) => {
    const { image, title,  price, description, _id } = singelData
    console.log(singelData);
    
    return (
        <div className="mt-5">
            <div className="card  bg-base-100 shadow-xl lg:h-[400px] ">
                <figure><img className="p-5" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className=" font-bold">$ {price}</p>
                    {/* Modal */}
                    <Modal singelData={singelData}></Modal>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;