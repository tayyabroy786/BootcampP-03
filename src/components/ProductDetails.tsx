
import React from 'react'
import { useParams } from "react-router-dom";
import { ProductItem } from '../store/state'
import { useSelector } from 'react-redux'

export const ProductDetails = () => {
  let { id } = useParams();
  const products = useSelector((state: ProductItem[]) => state)
  const product = products[id - 1];
  return (
    <><div className="product-single-details mt-5">
      <div className="container">
        <div className="col-md-5 col-sm-6 col-xs-12">
          <div className="imgs-area">
            <img src={product.thumbnail} alt="" />
          </div>
        </div>
        <div className="col-md-7 col-sm-6 col-xs-12">
          <div className="list-view hot-best-top">
            <div className="item-product item-product-list">
              <div className="item-product-info2 product-detail-info">
                <h3><span>{product.name}</span></h3>
                <div className="ratting-review">
                  <div className="info-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="order-number">
                    <span>( 5 Stars )</span>
                  </div>
                  <div className="review-add">
                    <a href="d">Add your Review</a>
                  </div>
                </div>
                <div className="info-product-price">
                  <label className="persale">10%</label>
                  <b>${product.price}.00</b>
                </div>
                <div className="list-item-des">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
