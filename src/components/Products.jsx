import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Loader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #3498db",
          borderTop: "4px solid transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
    </>
  );
};

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  //console.log(location);
  const navigate = useNavigate();
  //.log(navigate);

  const queryParams = new URLSearchParams(location.search);
  //console.log(queryParams);
  const search = queryParams.get("search") || "";
  //console.log(search);
  const category = queryParams.get("category") || "";
  const page = parseInt(queryParams.get("page") || "1");

  const pageSize = 5;

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        //console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and paginate
  const filtered = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true));

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  // Handler
  const handleSearch = (e) => {
    queryParams.set("search", e.target.value);
    queryParams.set("page", "1");
    navigate({ search: queryParams.toString() });
  };

  const handleCategory = (e) => {
    queryParams.set("category", e.target.value);
    queryParams.set("page", "1");
    navigate({ search: queryParams.toString() });
  };

  const goToPage = (newPage) => {
    queryParams.set("page", newPage.toString());
    navigate({ search: queryParams.toString() });
  };

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <Loader />
      </div>
    );

  return (
    <div>
      <h2>🛒 Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
      />

      <select value={category} onChange={handleCategory}>
        <option value="">All Categories</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      <ul>
        {paginated.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <Link to={`/products/${product.id}`}>
              {product.title} — ₹{product.price}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{
              margin: "4px",
              backgroundColor: i + 1 === page ? "#ccc" : "#eee",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
