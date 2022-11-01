import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home: React.FC<unknown> = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-row flex-wrap justify-center">
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 1"
          rate={4}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 2"
          rate={1}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 3"
          rate={2}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 4"
          rate={3}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 5"
          rate={5}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 6"
          rate={5}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 7"
          rate={5}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 8"
          rate={4}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 9"
          rate={5}
        />
        <ProductCard
          img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
          title="Rose 10"
          rate={5}
        />
      </div>
    </div>
  )
}

export default Home
