package com.chandru.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chandru.lms.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}