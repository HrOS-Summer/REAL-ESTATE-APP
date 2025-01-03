import "./filter.scss";

const Filter = () => {
    return (
        <div className="filter">
            <h1>
                Search results for <b>Chandigarh</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text"  id="city" name="city" placeholder="City Location"/>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>                        
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input 
                        type="text" 
                        name="minPrice"
                        id="minPrice"
                        placeholder="Min Price"
                    />
                </div>
                <div className="item">
                    <label htmlFor="city">Max Price</label>
                    <input 
                        type="text" 
                        name="maxPrice"
                        id="maxPrice"
                        placeholder="Max Price"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input 
                        type="text" 
                        name="bedroom"
                        id="bedroom"
                        placeholder="Bedroom"
                    />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter;