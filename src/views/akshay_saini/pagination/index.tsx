import { useState, useEffect } from "react";
import "./styles.css";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span>{title}</span>
    </div>
  );
};


const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  return !products.length ? (
    <h2>No products found</h2>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="pagination-container">
        <button
          disabled={currentPage === 0}
          onClick={() => goToPreviousPage()}
          id="previous"
        >
          <FiChevronsLeft />
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            key={n}
            className={"page-number " + (n === currentPage ? "active" : "")}
            onClick={() => handlePageChange(n)}
          >
            {n + 1}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          onClick={() => goToNextPage()}
          id="next"
        >
          <FiChevronsRight />
        </button>
      </div>
      <div className="products-container">
        {products.slice(start, end).map((item) => {
          return (
            <ProductCard
              key={item.id}
              image={item.thumbnail}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;


// Used CSS
.App {
    text-align: center;
  }
  
  .product-card {
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 200px;
    flex-wrap: wrap;
    border: 1px solid black;
    padding: 5px;
    margin: 10px;
    align-items: center;
    justify-content: center;
  }
  
  .product-img {
    width: 100px;
    height: 100px;
  }
  
  .products-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  
  .page-number {
    padding: 5px;
    margin: 2px;
    border: 1px solid black;
    cursor: pointer;
  }
  
  .pagination-container {
    padding: 20px;
  }
  
  .active {
    border: 2px solid blue;
  }