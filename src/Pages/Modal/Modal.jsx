
const Modal = ({singelData}) => {
    const { image, title, category, price, description, _id } = singelData
    return (
        <div>
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
    );
};

export default Modal;