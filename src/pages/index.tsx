import { Link } from "gatsby";
import React from "react";

export default function Home() {
  return (
    <div>
      <div>Direct to Snipcart</div>
      <button
        className='snipcart-add-item'
        data-item-id='formal-shoe'
        data-item-price='25'
        data-item-description='This is best shoe'
        data-item-url='/'
        data-item-image='https://cdn.shopify.com/s/files/1/0104/5757/9583/products/OSCO-Men-Dress-Shoes-Men-Formal-Shoes-Leather-Luxury-Fashion-Wedding-Shoes-Men-Business-Casual-Oxford.jpg?v=1575045878'
        data-item-name='Formal Shoe'
        data-item-custom1-name='Size'
        data-item-custom1-options='8|9[+5]|10[+10]'
        data-item-custom2-name='Info'
        data-item-custom2-type='checkbox'
      >
        CheckOut
      </button>
      <hr />
      <hr />
      <div>
        <Link to='productlist'>Product List</Link>
      </div>
    </div>
  );
}
