package com.example.myproject5thsem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myproject5thsem.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
