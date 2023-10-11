package com.chandru.lms.service;

import java.util.List;

import com.chandru.lms.dto.request.UserRequest;
import com.chandru.lms.dto.request.response.CountResponse;
import com.chandru.lms.dto.request.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}