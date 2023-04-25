import React, { useEffect, useState } from 'react'
import './products.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../../redux/action'
import PizzaCard from '../../components/pizzacard/PizzaCard'
import LoadingIcon from '../../assets/loading_icon.gif'

const Products = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const [filter, setFilter] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
 
  const getData = async () => {
    setLoading(true)
    const res = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68', {
      method: 'GET'
    })
    const data = await res.json()
    dispatch(addProducts(data))
    setLoading(false)
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='product-section'>
      <header className='product-header'>
        <h2 className='product-header-title'>Welcome To Pizza House</h2>
        <div className='product-header-search'>
          <input className='searchbar' type='search' placeholder='Search Your Favourite Pizza' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <select className='product-filter' onChange={handleFilter}>
            <option className='product-filter-options' value=''>Sort By</option>
            <option className='product-filter-options' value='price'>Price</option>
            <option className='product-filter-options' value='rating'>Rating</option>
          </select>
        </div>
      </header>
      {!loading ? <div className='product-container'>
        {productList.sort((a, b) => a[filter] - b[filter]).filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map(product => <PizzaCard {...product} key={product.id} />)}
      </div> :
      <img src={LoadingIcon} alt='loading icon' className='loading-icon'/>}
    </section>
  )
}

export default Products
