package com.chandru.lms.service;

import java.util.List;

import com.chandru.lms.dto.request.OrderRequest;
import com.chandru.lms.dto.request.response.CountResponse;
import com.chandru.lms.dto.request.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}