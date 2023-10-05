package com.chandru.lms.dto.request.response;

import java.util.Date;
import java.util.List;

import com.chandru.lms.model.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    private Long oid;
    private Date orderDate;
    private Long orderTotal;
    private String orderAddress;
    private String paymentMode;
    private List<Product> products;
}