package com.example.tp1.repository;

import com.example.tp1.entities.Project;
import com.example.tp1.entities.Role;
import com.example.tp1.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role,Long> {


    @Query("select p.project from User p where p.fname=:x and p.lname=:y")
    List<Role> findAllAffected(@Param("x")String fname, @Param("y")String lname);
}
