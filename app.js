const data = {
    items: [
        {
            id: 1,
            color: 'green',
            name: 'cup',
        },
        {
            id: 2,
            color: 'red',
            name: 'cup',
        }
    ]
}
const Items = ({ item }) => (
    <div>
        <h2>Product name: {item.name}</h2>
        <p>Product color: {item.color}</p>
    </div>
)

class ShoppingCart extends React.Component {
    state = {
        availableGreenCup: 10,
        availableRedCup: 10,
        shoppingCartGreen: 0,
        shoppingCartRed: 0,
        isConfirmed: false
    }
    handleSubtractionGreen = () => {
        this.setState({
            shoppingCartGreen: this.state.shoppingCartGreen - 1
        })
    }
    handleAdditionGreen = () => {
        this.setState({
            shoppingCartGreen: this.state.shoppingCartGreen + 1
        })
    }
    handleSubtractionRed = () => {
        this.setState({
            shoppingCartRed: this.state.shoppingCartRed - 1
        })
    }
    handleAdditionRed = () => {
        this.setState({
            shoppingCartRed: this.state.shoppingCartRed + 1
        })
    }
    handleCheckboxConfirmation = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    }
    sendForm = (e) => {
        e.preventDefault()
        if (this.state.isConfirmed) {
            this.setState({
                availableGreenCup: this.state.availableGreenCup - this.state.shoppingCartGreen,
                availableRedCup: this.state.availableRedCup - this.state.shoppingCartRed,
                shoppingCartGreen: 0,
                shoppingCartRed: 0,
                isConfirmed: false
            })
        } else {
            alert('You must accept conditions.')
        }
    }
    render() {
        const { availableGreenCup, availableRedCup, shoppingCartGreen, shoppingCartRed, isConfirmed } = this.state
        const items = this.props.data.items
        const products = items.map(item => <Items item={item} />)
        return (
            <>
                {products}
                <p>Green cup</p>
                <button onClick={this.handleSubtractionGreen} disabled={shoppingCartGreen ? false : true}>-</button>
                <span> {shoppingCartGreen} </span>
                <button onClick={this.handleAdditionGreen} disabled={shoppingCartGreen === availableGreenCup ? true : false}>+</button>

                <p>Red cup</p>
                <button onClick={this.handleSubtractionRed} disabled={shoppingCartRed ? false : true}>-</button>
                <span> {shoppingCartRed} </span>
                <button onClick={this.handleAdditionRed} disabled={shoppingCartRed === availableRedCup ? true : false}>+</button>
                <form onSubmit={this.sendForm}>
                    <input type="checkbox" id='conditions' checked={isConfirmed} onChange={this.handleCheckboxConfirmation} />
                    <label htmlFor="conditions">Accepts the conditions of the store.</label>
                    <br />
                    <button>Buy</button>
                </form>
            </>
        )
    }
}

ReactDOM.render(<ShoppingCart data={data} />, document.getElementById('root'))