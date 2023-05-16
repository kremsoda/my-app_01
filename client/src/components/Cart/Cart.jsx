import Button from "../Button";


function Cart({item}) {
    return(
        <div className="m-3 shadow-md">
            <img src={item.src} alt="image description" />
            <div className="m-3">
                <h1 className="font-bold">{item.name}</h1>
                <p className="text-slate-400">{item.position}</p>
                <p className="my-3">{item.about}</p>
                <p className="font-bold">{item.email}</p>
                <Button className='my-3' secondary outline>Contact</Button>
            </div>
        </div>
    );
}

export default Cart;