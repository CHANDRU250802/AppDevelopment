package com.chandru.lms.service;

import java.util.List;

import com.chandru.lms.dto.request.ProductRequest;
import com.chandru.lms.dto.request.response.CountResponse;
import com.chandru.lms.dto.request.response.ProductResponse;
import com.chandru.lms.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

    CountResponse productCount();

}