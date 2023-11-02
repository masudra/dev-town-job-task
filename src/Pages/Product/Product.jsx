const Product = ({ singelData }) => {
    const { image, title, category, price, description, _id } = singelData
    console.log(singelData);
    
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl h-[400px]">
                <figure><img className="p-5" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className=" font-bold">$ {price}</p>
                    {/* Modal */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>More Details</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <figure><img className="w-[200px] hover:w-[400px]" src={image} alt="" /></figure>
                            <h3 className="font-bold text-lg">{title}</h3>
                            <p className="py-4">${price}</p>
                            <p className="py-4">{description}</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Product;