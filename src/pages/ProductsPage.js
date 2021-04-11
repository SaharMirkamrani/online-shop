import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

const ProductsPage = () => {
  return <main>
    <PageHero title="products" />
    <Wrapper className="page">
      <section className="product-center products">
        <Filters />
        <div>
          <Sort />
          <ProductList />
          </div>
      </section>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem 2rem;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
