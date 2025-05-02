const ItemListContainer = (props) => {
    return(
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold text-center">{props.greeting}</h2>
            <p className="slogan">We serve the best pizzas in town!</p>
        </div>
    )
}

export default ItemListContainer;