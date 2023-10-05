package com.chandru.lms.service;

import com.chandru.lms.dto.request.AuthenticationRequest;
import com.chandru.lms.dto.request.RegisterRequest;
import com.chandru.lms.dto.request.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}