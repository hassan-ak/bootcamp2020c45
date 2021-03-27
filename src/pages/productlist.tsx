import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { graphql, useStaticQuery } from "gatsby";

const stripePromise = loadStripe(
  "pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ"
);

export default function ProductList({ location }) {
  const data = useStaticQuery(
    graphql`
      query ProductPrices {
        prices: allStripePrice {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                images
                description
              }
            }
          }
        }
      }
    `
  );
  console.log("Stripe Data = ", data);

  return (
    <div>
      <h1>Product List</h1>
      {data.prices.edges.map((node) => (
        <div key={node.node.id}>
          <div>Product Name: {node.node.product.name}</div>
          <div>Product Description: {node.node.product.description}</div>
          <div>Product Price: {node.node.unit_amount}</div>
          <div>
            <img width='200px' src={node.node.product.images[0]} alt='' />{" "}
          </div>
          <button
            className='snipcart-add-item'
            data-item-id={node.node.id}
            data-item-price={node.node.unit_amount}
            data-item-description={node.node.product.description}
            data-item-url='https://hassanalikhan-bc2020c45.netlify.app/productlist'
            data-item-image={node.node.product.images[0]}
            data-item-name={node.node.product.name}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
