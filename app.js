class ShoppingCart extends React.Component {
    state = {
        availableProducts: 10,
        shoppingCart: 0,
        isConfirmed: false
    }
    handleSubtraction = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1
        })
    }
    handleAddition = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1
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
                availableProducts: this.state.availableProducts - this.state.shoppingCart,
                shoppingCart: 0,
                isConfirmed: false
            })
        }
    }
    render() {
        const { availableProducts, shoppingCart, isConfirmed } = this.state
        return (
            <>
                <button onClick={this.handleSubtraction} disabled={shoppingCart ? false : true}>-</button>
                <span> {shoppingCart} </span>
                <button onClick={this.handleAddition} disabled={shoppingCart === availableProducts ? true : false}>+</button>
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

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))